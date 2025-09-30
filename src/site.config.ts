import { withBase } from "./utils/helpers";

export type Image = {
  src: string;
  alt?: string;
  caption?: string;
};

export type Link = {
  text: string;
  href: string;
};

export type Hero = {
  eyebrowText?: string;
  title?: string;
  text?: string;
  image?: Image;
  actions?: Link[];
};

export type About = {
  title?: string;
  text?: string;
};

export type Blog = {
  description?: string;
};

export type ContactInfo = {
  title?: string;
  text?: string;
  email?: {
    text?: string;
    href?: string;
    email?: string;
  };
  socialProfiles?: {
    text?: string;
    href?: string;
  }[];
};

export type Subscribe = {
  title?: string;
  text?: string;
  formUrl: string;
};

export type SiteConfig = {
  website: string;
  logo?: Image;
  title: string;
  description: string;
  image?: Image;
  headerNavLinks?: Link[];
  footerNavLinks?: Link[];
  socialLinks?: Link[];
  hero?: Hero;
  about?: About;
  contactInfo?: ContactInfo;
  subscribe?: Subscribe;
  blog?: Blog;
  postsPerPage?: number;
  recentPostLimit: number;
  projectsPerPage?: number;
  /** Tambahan untuk SEO (dipakai di <Seo />) */
  twitter?: string; // @handle
};

const siteConfig: SiteConfig = {
  website: "https://twotworial.com",
  title: "Twotworial",
  description:
    "Twotworial membantu bisnis furniture Anda lebih efisien. Jasa drafter furniture, konsultasi, gambar kerja profesional, serta tools praktis seperti costing, COGS, draftlist, hingga pembuatan website. Tingkatkan profit & produktivitas sejak sekarang.",
  twitter: "@twotworial",
  image: {
    src: "/space-ahead-preview.jpeg",
    alt: "Drafter Furniture.",
  },

  headerNavLinks: [
    { text: "Home", href: withBase("/") },
    { text: "Blog", href: withBase("/blog") },
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

  socialLinks: [
    { text: "Behance", href: "https://www.behance.net/twotworial" },
    { text: "Threads", href: "https://www.threads.net/@twotworial" },
    { text: "Tiktok", href: "https://www.tiktok.com/@twotworial" },
    { text: "X/Twitter", href: "https://x.com/antchore" },
  ],

  hero: {
    eyebrowText: "Twotworial",
    title: "Drafter Furniture ✨",
    text: "Ditulis oleh Anto Mandiri, desainer furniture sejak 2013.",
    image: {
      src: "/assets/images/pixeltrue-space-discovery.svg",
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
      "Twotworial adalah blog dan layanan seputar desain serta bisnis furniture. Di sini Anda akan menemukan artikel praktik, studi kasus produksi, sampai alat bantu perhitungan yang bisa langsung dipakai di workshop.",
  },

  contactInfo: {
    title: "Kontak",
    text:
      "Punya pertanyaan, masukan, atau ingin bekerja sama? Silakan hubungi lewat email atau profil berikut.",
    email: {
      text: "Kirim email—saya akan balas secepatnya.",
      href: "mailto:hi@twotworial.com",
      email: "hi@twotworial.com",
    },
    socialProfiles: [
      { text: "LinkedIn", href: "https://www.linkedin.com/in/rismanto/" },
      { text: "Peerlist", href: "https://peerlist.io/twotworial" },
      { text: "Instagram", href: "https://instagram.com/twotworial" },
    ],
  },

  subscribe: {
    title: "Berlangganan Twotworial",
    text: "Satu update per pekan. Artikel terbaru langsung ke inbox Anda.",
    formUrl: "#",
  },

  blog: {
    description:
      "Artikel seputar desain, produksi, dan bisnis furniture—ringkas, praktis, dan bisa langsung diterapkan.",
  },

  postsPerPage: 9,
  recentPostLimit: 5,
};

export default siteConfig;
