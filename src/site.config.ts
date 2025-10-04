// src/site.config.ts
import { withBase } from "./utils/helpers";

export type Image = {
  src: string;
  alt?: string;
  caption?: string;
};

export type Link = {
  text: string;
  href: string;
  /** Nama file ikon di /src/icons tanpa ekstensi, mis: "x", "tiktok", "instagram" */
  icon?: string;
  /** Untuk aksesibilitas, jika ingin label berbeda dari text */
  srOnly?: string;
};

export type Hero = {
  eyebrowText?: string;
  title?: string;
  text?: string;
  image?: Image;
  actions?: Link[];
};

export type About = { title?: string; text?: string };
export type Blog = { description?: string };

export type ContactInfo = {
  title?: string;
  text?: string;
  email?: { text?: string; href?: string; email?: string };
  socialProfiles?: { text?: string; href?: string; icon?: string }[];
};

export type Subscribe = { title?: string; text?: string; formUrl: string };

export type SiteConfig = {
  website: string;
  logo?: Image;
  title: string;
  description: string;
  image?: Image;
  headerNavLinks?: Link[];
  footerNavLinks?: Link[];
  /** Link sosmed untuk footer (pakai ikon) */
  socialLinks?: Link[];
  hero?: Hero;
  about?: About;
  contactInfo?: ContactInfo;
  subscribe?: Subscribe;
  blog?: Blog;
  postsPerPage?: number;
  recentPostLimit: number;
  /** SEO */
  twitter?: string; // @handle
};

const siteConfig: SiteConfig = {
  website: "https://twotworial.com",
  title: "Twotworial",
  description:
    "Twotworial membantu bisnis furniture lebih efisien. Jasa drafter, konsultasi, gambar kerja profesional, serta tools praktis seperti costing, COGS, dan draftlist.",

  twitter: "@twotworial",

  image: {
    src: "/space-ahead-preview.jpeg",
    alt: "Drafter Furniture",
  },

  headerNavLinks: [
    { text: "Home", href: withBase("/") },
    { text: "Blog", href: withBase("/blog") },
    { text: "Produk", href: withBase("/produk") },
    { text: "Tags", href: withBase("/tags") },
    { text: "About", href: withBase("/about") },
    { text: "Contact", href: withBase("/contact") },
  ],

  footerNavLinks: [
    { text: "About", href: withBase("/about") },
    { text: "Contact", href: withBase("/contact") },
    { text: "RSS Feed", href: withBase("/rss.xml") },
    { text: "Sitemap", href: withBase("/sitemap-index.xml") },
  ],

  /** Pakai nama ikon persis seperti file di /src/icons/ (tanpa .svg) */
  socialLinks: [
    { text: "Behance",   href: "https://www.behance.net/twotworial",  icon: "behance",   srOnly: "Behance" },
    { text: "Threads",   href: "https://www.threads.net/@twotworial", icon: "threads",   srOnly: "Threads" },
    { text: "Tiktok",    href: "https://www.tiktok.com/@twotworial",  icon: "tiktok",    srOnly: "Tiktok" },
    { text: "X/Twitter", href: "https://x.com/antchore",              icon: "x",         srOnly: "X (Twitter)" },
    // Tambahan opsional (punya ikonnya juga):
    // { text: "Instagram", href: "https://instagram.com/twotworial", icon: "instagram" },
    // { text: "LinkedIn",  href: "https://www.linkedin.com/in/rismanto/", icon: "linkedin" },
  ],

  hero: {
    eyebrowText: "Twotworial",
    title: "Drafter Furniture",
    text: "Ditulis oleh Anto Mandiri, desainer furniture sejak 2013.",
    image: {
      src: "/assets/images/Cover.webp",
      alt: "Drafter Furniture",
    },
    actions: [
      { text: "Baca Artikel", href: withBase("/blog") },
      { text: "Subscribe", href: "#subscribe" },
    ],
  },

  about: {
    title: "Tentang",
    text:
      "Twotworial adalah blog dan layanan seputar desain serta bisnis furniture. Temukan artikel praktik, studi kasus produksi, hingga alat bantu perhitungan yang siap pakai di workshop.",
  },

  contactInfo: {
    title: "Kontak",
    text:
      "Punya pertanyaan, masukan, atau ingin bekerja sama? Hubungi lewat email atau profil berikut.",
    email: {
      text: "Kirim email—saya akan balas secepatnya.",
      href: "mailto:hi@twotworial.com",
      email: "hi@twotworial.com",
    },
    socialProfiles: [
      { text: "LinkedIn", href: "https://www.linkedin.com/in/rismanto/", icon: "linkedin" },
      { text: "Peerlist", href: "https://peerlist.io/twotworial" },
      { text: "Instagram", href: "https://instagram.com/twotworial", icon: "instagram" },
    ],
  },

  subscribe: {
    title: "Newsletter",
    text: "Satu update per pekan. Artikel terbaru langsung ke inbox Anda.",
    formUrl: "#",
  },

  blog: {
    description:
      "Artikel seputar desain, produksi, dan bisnis furniture—ringkas, praktis, dan bisa langsung diterapkan.",
  },

  postsPerPage: 10,
  recentPostLimit: 6,
};

export default siteConfig;
