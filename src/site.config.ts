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
};

const siteConfig: SiteConfig = {
    website: 'https://twotworial.com',
    title: 'Twotworial',
    description: 'Twotworial membantu bisnis furniture Anda lebih efisien. Dapatkan jasa drafter furniture, konsultasi bisnis, gambar kerja profesional, serta tools praktis seperti costing, COGS, draftlist, hingga pembuatan website. Tingkatkan profit & produktivitas furniture Anda!',
    image: {
        src: '/space-ahead-preview.jpeg',
        alt: 'Drafter Furniture.'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: withBase('/')
        },
        {
            text: 'Blog',
            href: withBase('/blog')
        },
        {
            text: 'Tags',
            href: withBase('/tags')
        },
        {
            text: 'About',
            href: withBase('/about')
        },
        {
            text: 'Contact',
            href: withBase('/contact')
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: withBase('/about')
        },
        {
            text: 'Contact',
            href: withBase('/contact')
        },
        {
            text: 'RSS Feed',
            href: withBase('/rss.xml')
        },
                {
            text: 'Sitemap',
            href: withBase('/sitemap-index.xml')
        }
    ],
    socialLinks: [
        {
            text: 'Dribbble',
            href: 'https://dribbble.com/'
        },
        {
            text: 'Instagram',
            href: 'https://instagram.com/'
        },
        {
            text: 'X/Twitter',
            href: 'https://twitter.com/'
        }
    ],
    hero: {
        eyebrowText: 'Twotworial',
        title: 'Drafte Furniture ✨',
        text: "Ditulis ole Anto Mandiri, desainer furniture sejak 2013.",
        image: {
            src: '/assets/images/pixeltrue-space-discovery.svg',
            alt: 'Drafter Furniture'
        },
        actions: [
            {
                text: 'Baca Artikel',
                href: withBase('/blog')
            },
            {
                text: 'Subscribe',
                href: '#subscribe'
            }
        ]
    },
    about: {
        title: 'About',
        text: 'Space Ahead is a blog about space exploration and travel. It is written by Astro-naut Sid, a space explorer at Beyond Earth. Sid is known for his love of adventure and his insatiable curiosity about the universe. He has explored countless planets, discovered new life forms, and made friends with aliens along the way. 🚀',
    },
    contactInfo: {
        title: 'Contact',
        text: "Hi! Whether you have a question, a suggestion, or just want to share your thoughts, I'm all ears. Feel free to get in touch through any of the methods below:",
        email: {
            text: "Drop me an email and I’ll do my best to respond as soon as possible.",
            href: "mailto:hi@teoteorial.com",
            email: "hi@twotworial.com"
        },
        socialProfiles: [
            {
                text: "LinkedIn",
                href: "https://www.linkedin.com/in/rismanto/"
            },
            {
                text: "Peerlist",
                href: "https://peerlist.io/twotworial"
            },
            {
                text: "Instagram",
                href: "https://instagram.com/twotworial"
            }
        ]
    },
    subscribe: {
        title: 'Subscribe to Space Ahead',
        text: 'One update per week. All the latest stories in your inbox.',
        formUrl: '#'
    },
    blog: {
        description: "Read about my space adventures, explorations and the aliens I've met on my journeys."
    },
    postsPerPage: 9,
    recentPostLimit: 5
};

export default siteConfig;
