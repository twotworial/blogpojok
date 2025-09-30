import { type CollectionEntry } from "astro:content";

/** Tipe bantu biar ringkas */
type BlogEntry = CollectionEntry<"blogs">;

/** Parse tanggal yang aman; kembalikan epoch 0 kalau invalid */
function safeTime(input: string | Date | undefined): number {
  if (!input) return 0;
  const t = new Date(input).getTime();
  return Number.isFinite(t) ? t : 0;
}

/** Urutkan postingan terbaru dulu, toleran terhadap tanggal invalid */
export function sortItemsByDateDesc(a: BlogEntry, b: BlogEntry): number {
  return safeTime(b.data.pubDate) - safeTime(a.data.pubDate);
}

/**
 * Slugify judul/tag:
 * - lower-case
 * - hilangkan diakritik (é → e)
 * - ganti non-alfanumerik jadi "-"
 * - rapikan "-" beruntun & di tepi
 */
export function createSlugFromTitle(title: string): string {
  return (
    title
      ?.toString()
      .normalize("NFKD") // pisahkan diakritik
      .replace(/[\u0300-\u036f]/g, "") // hapus diakritik
      .toLowerCase()
      .replace(/&/g, " and ")
      .replace(/[^a-z0-9\s-]/g, " ") // selain alnum/space/hyphen → spasi
      .trim()
      .replace(/\s+/g, "-") // spasi → -
      .replace(/-+/g, "-") // duplikat "-" → satu
      .replace(/^-+|-+$/g, "") // potong "-" awal/akhir
  );
}

/** Ambil semua tag unik (berdasar slug id), terurut alfabetis menurut nama */
export function getAllTags(posts: BlogEntry[]) {
  const map = new Map<string, { name: string; id: string }>();
  for (const post of posts) {
    const list = (post.data.tags ?? []).filter(Boolean);
    for (const raw of list) {
      const name = String(raw);
      const id = createSlugFromTitle(name);
      if (!map.has(id)) map.set(id, { name, id });
    }
  }
  return Array.from(map.values()).sort((a, b) =>
    a.name.localeCompare(b.name, "id")
  );
}

/** Filter postingan berdasarkan tag (dibandingkan pakai slug) */
export function getPostsByTag(posts: BlogEntry[], tagId: string) {
  const target = createSlugFromTitle(tagId);
  return posts.filter((post) =>
    (post.data.tags ?? [])
      .map((t) => createSlugFromTitle(String(t)))
      .includes(target)
  );
}

/**
 * Gabungkan BASE_URL Astro dengan path secara aman:
 * - mengembalikan path root-relative ("/...") jika di root
 * - hindari "//..." (double slash)
 * - biarkan URL absolut/anchor/mailto/tel apa adanya
 */
export const withBase = (p: string): string => {
  if (!p) return "/";
  const href = p.trim();

  // Jangan ganggu URL absolut atau special schemes
  if (
    /^(?:[a-z][a-z0-9+.-]*:)?\/\//i.test(href) || // http(s)://, protocol-relative //
    /^(?:mailto:|tel:|sms:|data:|javascript:)/i.test(href) ||
    href.startsWith("#")
  ) {
    return href;
  }

  const base = (import.meta.env.BASE_URL || "/").trim();
  const path = href.startsWith("/") ? href : `/${href.replace(/^\/+/, "")}`;

  // Root site → langsung kembalikan path
  if (base === "/" || base === "") return path;

  // Subpath site → gabungkan tanpa double slash
  const cleanBase = base.replace(/\/+$/, "");
  return `${cleanBase}${path}`;
};
