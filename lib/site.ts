export const site = {
  name: "NEXONS GROUP",
  shortName: "NEXONS",
  tagline: "Crafting Next-Gen Digital Solutions",
  description:
    "NEXONS GROUP builds operational software for businesses worldwide, including Pakistan — from hospitality and agriculture to custom systems designed around how you actually work. Support in every region, around the clock.",
  url: "https://nexonsgroup.com",
  email: "support.nexons@gmail.com",
  address: {
    line1: "I-9/3",
    city: "Islamabad",
    postal: "44000",
    country: "Pakistan",
  },
  regions: [
    { name: "Pakistan", coverage: "Islamabad HQ · nationwide" },
    { name: "Americas", coverage: "North & South America" },
    { name: "EMEA", coverage: "Europe, Middle East & Africa" },
    { name: "Asia-Pacific", coverage: "Asia, Australia & Pacific" },
  ],
  socials: {
    linkedin: "https://www.linkedin.com/",
    x: "https://x.com/",
    facebook: "https://www.facebook.com/",
  },
};

export const products = [
  {
    slug: "nexon-kds",
    href: "/nexon-kds",
    name: "Nexon KDS",
    category: "Hospitality",
    blurb: "Kitchen Display System for restaurants, ghost kitchens and multi-site groups.",
    description:
      "Replace paper tickets with a live kitchen. Route orders, bump with intent, and see every station in real time.",
    videoUrl: "https://www.youtube.com/watch?v=7NBrRPsANQc",
    features: [
      "Live order routing across grill, pass and expo",
      "Works with the POS you already run",
      "Multi-site control from one view",
      "Prep times, bump analytics and labour insight",
    ],
  },
  {
    slug: "nexon-pos",
    href: "/nexon-pos",
    name: "Nexon POS",
    category: "Hospitality",
    blurb: "Point of sale for restaurants, cafés and multi-site food service.",
    description:
      "Take orders, take payment, and keep the floor and the back office on the same ticket — from a single till or a whole group.",
    features: [
      "Fast floor and counter service",
      "Tables, modifiers and split bills",
      "Payments, receipts and end-of-day",
      "Pairs with Nexon KDS when you need the kitchen live",
    ],
  },
  {
    slug: "flockify",
    href: "/flockify",
    name: "Flockify",
    category: "Agriculture",
    blurb: "The operating system for modern poultry farms.",
    description:
      "Track every flock, shed and cycle — feed, health, mortality and production — in one place built for the farm, not the boardroom.",
    videoUrl: "https://www.youtube.com/watch?v=ofrVqrQU1iQ&t=10s",
    features: [
      "Flock tracking from placement to deplete",
      "Feed conversion, mortality and health logs",
      "Production analytics operators actually use",
      "Automated reports for owners and vets",
    ],
  },
  {
    slug: "custom-software",
    href: "/custom-software",
    name: "Custom software",
    category: "Enterprise",
    blurb: "Bespoke systems when the catalogue is not the right fit.",
    description:
      "We design and ship operational software around your workflow — retail, logistics, field ops, or a process that does not have a name yet.",
    features: [
      "Discovery on the floor, not only in workshops",
      "Web, mobile and integrations with what you already run",
      "Build, launch and support from the same team",
      "Regional hosting and 24/7 coverage worldwide",
    ],
  },
] as const;

export const navLinks = [
  { href: "/products", label: "Products" },
  { href: "/support", label: "Support" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
