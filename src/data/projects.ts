export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  liveUrl: string;
  repoUrl: string;   // Set "" to hide the GitHub button
  year: number;
  image?: string;    // Optional: place image in /public/images/ and set path here
}

// ─── YOUR PORTFOLIO PROJECTS ──────────────────────────────────────────────────
// To add a new project: copy any entry below, fill in your details, and save.
// To add a thumbnail: save image to /public/images/ and set image: "/images/..."
// ──────────────────────────────────────────────────────────────────────────────
export const projects: Project[] = [
  {
    slug: "pierre-reviews",
    title: "Pierre Porter Reviews — Creator Hub",
    description:
      "A high-impact, dark-aesthetic landing page for lifestyle architect and creator Pierre Porter. Features video integration, brand stats, and a streamlined booking funnel for collaborations.",
    tags: ["Creator Hub", "Landing Page", "Video Integration", "SEO"],
    liveUrl: "https://www.pierrereviews.com",
    repoUrl: "",
    year: 2025,
    image: "/images/pierre-reviews.png",
  },
  {
    slug: "the-ivory-on-park",
    title: "The Ivory On Park — Event Venue",
    description:
      "Full multi-page website for Brooklyn's premier intimate rooftop event venue. Features candlelight concert ticketing, private event bookings, gallery, pricing, FAQ, and contact — with an admin portal.",
    tags: ["Business Website", "Multi-Page", "Event & Booking", "SEO"],
    liveUrl: "https://www.theivoryonpark.com",
    repoUrl: "",
    year: 2025,
    image: "/images/ivory-on-park.png",
  },
  {
    slug: "city-pulse",
    title: "City Pulse — Streetwear E-Commerce",
    description:
      "Premium e-commerce storefront for a Newark-born streetwear brand. Dark, editorial aesthetic with a full shop, product pages, and global shipping. Built around the tagline 'Style Never Fades.'",
    tags: ["E-Commerce", "Streetwear", "Landing Page", "Mobile-First"],
    liveUrl: "https://www.shopcitypulse.net",
    repoUrl: "",
    year: 2025,
    image: "/images/city-pulse.png",
  },
  {
    slug: "dj-pat-lax",
    title: "DJ Pat Lax — DJ Booking & Brand Site",
    description:
      "Full brand website for NYC-based Afrobeats & Amapiano DJ Pat Lax. Includes booking form, press kit, past events, SoundCloud mix embeds, residency info, and an Outside Agenda event series page.",
    tags: ["Business Website", "Booking", "Multi-Page", "SEO"],
    liveUrl: "https://www.partywithpatlax.com",
    repoUrl: "",
    year: 2025,
    image: "/images/pat-lax.png",
  },
  {
    slug: "beyond-the-vow",
    title: "Beyond the Vow — Luxury Wedding Coordination",
    description:
      "Elegant multi-page website for a luxury wedding coordination brand. Features a cinematic gallery, bridal beauty services, inquiry funnel, and a refined editorial aesthetic built to attract high-end clientele.",
    tags: ["Business Website", "Multi-Page", "Landing Page", "SEO"],
    liveUrl: "https://www.beyondthevow.co",
    repoUrl: "",
    year: 2025,
    image: "/images/beyond-the-vow.png",
  },
  {
    slug: "mark-shot-this",
    title: "Mark Militar — Sports Photography Portfolio",
    description:
      "High-performance photography portfolio for sports photographer Mark Militar. Features a dynamic Cloudinary-powered gallery, category filtering, admin portal, and a mobile-first editorial layout.",
    tags: ["Photography", "Portfolio", "Multi-Page", "Mobile-First"],
    liveUrl: "https://www.markshotthis.com",
    repoUrl: "",
    year: 2025,
    image: "/images/mark-shot-this.png",
  },
  {
    slug: "powerson-protection",
    title: "Powerson Protection — Executive Security Services",
    description:
      "Premium brand website for an executive protection & global security firm. Features a bold dark aesthetic, service breakdown, contact funnel, and trust-building stats across NY, NJ, PA, CT, and FL.",
    tags: ["Business Website", "Landing Page", "SEO", "Mobile-First"],
    liveUrl: "https://www.powersonprotection.com",
    repoUrl: "",
    year: 2025,
    image: "/images/powerson-protection.png",
  },
];
// ──────────────────────────────────────────────────────────────────────────────
