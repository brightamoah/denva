export interface ServiceDetail {
  slug: string;
  title: string;
  summary: string;
  includes: string[];
  timeline: string;
  image: string;
  alt: string;
}

export interface GhostwritingPackage {
  name: string;
  pages: string;
  price: string;
  timeline: string;
}

export interface ServiceProcessStep {
  number: string;
  title: string;
  description: string;
}

export type MaterialTone
  = | "navy"
    | "linen"
    | "gold"
    | "espresso"
    | "charcoal"
    | "ivory";

export interface PrintSpec {
  name: string;
  description: string;
  tone: MaterialTone;
}

export interface ServiceFaq {
  label: string;
  content: string;
}

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "ghostwriting",
    title: "Ghostwriting & Autobiography",
    summary:
      "Bring your life story, memoir, business insights or novel to life in your authentic voice. We handle interviews, transcription, drafting and revisions under a confidential Non-Disclosure Agreement.",
    includes: [
      "Autobiography, memoir, business and non-fiction ghostwriting",
      "Confidential discovery meeting and concept outline roadmap",
      "Interviews, notes gathering and audio transcription",
      "Regular chapter drafts with multiple revision rounds",
    ],
    timeline: "3 to 12 months, depending on page count",
    image: "/images/book-memoir.jpg",
    alt: "A light-coloured hardcover book resting on a stone surface",
  },
  {
    slug: "editing",
    title: "Manuscript Review, Editing & Proofreading",
    summary:
      "A thorough five-area manuscript review covering substance, logic, coherence, clarity and grammar, followed by professional editing and a final quality check before print.",
    includes: [
      "Five-area manuscript review report with actionable feedback",
      "Structural, developmental and line-by-line editing",
      "Language, flow, sentence construction and clarity refinement",
      "Thorough proofreading for grammar, spelling and typographical accuracy",
    ],
    timeline: "Agreed around your manuscript length",
    image: "/images/atelier-craft.jpg",
    alt: "Printed manuscript pages, a pen and bookbinding tools on a workbench",
  },
  {
    slug: "design",
    title: "Book Cover Design & Interior Layout",
    summary:
      "A captivating book cover crafted to attract readers, paired with an interior layout formatted with comfortable margins, elegant typography and balanced chapter styling.",
    includes: [
      "Custom cover design aligned with your genre and creative vision",
      "Interior page layout, margins, paragraph styles and typography",
      "Front matter, table of contents, headers, footers and back matter",
      "High digital print-ready files and digital publishing formats",
    ],
    timeline: "Agreed per project",
    image: "/images/book-edition.jpg",
    alt: "A charcoal-bound book presented inside a slipcase",
  },
  {
    slug: "publishing",
    title: "ISBN Assistance & Publishing Preparation",
    summary:
      "ISBN registration guidance, barcode generation and complete digital publishing support to prepare your book for print and online readers.",
    includes: [
      "ISBN guidance and official registration assistance",
      "Pre-press quality checks and print file preparation",
      "Amazon Kindle formatting and upload assistance",
      "Author-owned publishing accounts with full copyright retention",
    ],
    timeline: "Agreed per project",
    image: "/images/book-monograph.jpg",
    alt: "A dark cloth-bound book photographed on a dark surface",
  },
  {
    slug: "printing",
    title: "Book Printing Services",
    summary:
      "Premium physical book production utilizing advanced high digital printing technology for crisp, sharp text and vibrant images, printed from 300 copies.",
    includes: [
      "Mechanized brownish or creamish bond paper and white bond paper",
      "Matte lamination and gloss lamination cover finishes",
      "Perfect binding and durable hardcover binding styles",
      "Standard sizes like A5 and A4 or custom dimensions",
    ],
    timeline: "9 to 15 business days standard, expedited available",
    image: "/images/hero-athena.jpg",
    alt: "A stack of printed hardcover books and a fountain pen on a desk",
  },
  {
    slug: "launch",
    title: "Book Launch & Marketing Support",
    summary:
      "Consultation, planning and promotional execution to give your book a successful send-off, including custom launch collateral and social media marketing support.",
    includes: [
      "Book launch consultation, planning and event execution support",
      "Branded pull-up banners, backdrops, paper bags and t-shirts",
      "Promotional social media artwork and digital announcement materials",
      "Marketing advisory to help build your author profile and reach readers",
    ],
    timeline: "Planned around your launch date",
    image: "/images/book-chronicle.jpg",
    alt: "A leather-bound book with gilt page edges",
  },
];

export const ghostwritingPackages: GhostwritingPackage[] = [
  {
    name: "Basic Package",
    pages: "50 pages (A5 book)",
    price: "GHS 5,000",
    timeline: "3 to 5 months",
  },
  {
    name: "Standard Package",
    pages: "100 pages (A5 book)",
    price: "GHS 10,000",
    timeline: "6 to 8 months",
  },
  {
    name: "Premium Package",
    pages: "150 pages (A5 book)",
    price: "GHS 15,000",
    timeline: "7 to 8 months",
  },
  {
    name: "Extended Premium",
    pages: "200 pages (A5 book)",
    price: "GHS 20,000",
    timeline: "9 to 10 months",
  },
  {
    name: "Comprehensive Package",
    pages: "250 pages (A5 book)",
    price: "GHS 25,000",
    timeline: "9 to 12 months",
  },
  {
    name: "Ultimate Package",
    pages: "300 pages (A5 book)",
    price: "GHS 30,000",
    timeline: "12 months or above",
  },
];

export const ghostwritingPackageNote
  = "Ghostwriting packages include writing, audio transcription, developmental editing, proofreading, ISBN registration and book cover and interior design. A mutual Non-Disclosure Agreement (NDA) is signed before work begins.";

export const serviceProcess: ServiceProcessStep[] = [
  {
    number: "01",
    title: "Initial Consultation & Outline",
    description:
      "We begin with a discovery meeting to understand your goals, vision, target audience and tone. We then build a detailed concept outline that acts as the roadmap for your book.",
  },
  {
    number: "02",
    title: "Research & Content Gathering",
    description:
      "Through recorded interviews, notes, personal archives and additional subject research, we gather and structure the material while clarifying details collaboratively with you.",
  },
  {
    number: "03",
    title: "Writing & Drafting",
    description:
      "Our writers craft the manuscript chapter by chapter according to the agreed outline. You receive regular drafts for review with multiple revision rounds until the voice is right.",
  },
  {
    number: "04",
    title: "Editing & Proofreading",
    description:
      "Your completed manuscript undergoes professional structural editing to improve flow, clarity and narrative arc, followed by thorough proofreading to eliminate any final errors.",
  },
  {
    number: "05",
    title: "Approval, Design & Printing",
    description:
      "Once you approve the final manuscript, we deliver digital and print-ready files, complete cover design and interior layout, manage ISBN registration, and proceed to printing.",
  },
];

export const printSpecs: PrintSpec[] = [
  {
    name: "Mechanized Bond Paper",
    description:
      "High-quality, durable paper with a natural brownish or creamish color. Ideal for creating a unique, professional look.",
    tone: "linen",
  },
  {
    name: "Normal Bond Paper",
    description:
      "Cost-effective, clean, and classic white paper suitable for most general book and print projects.",
    tone: "ivory",
  },
  {
    name: "A5, A4 or Custom Sizes",
    description:
      "We cater to standard publishing formats like A5 and A4, as well as custom trim dimensions for poetry, art and monographs.",
    tone: "navy",
  },
  {
    name: "Matte Lamination",
    description:
      "A smooth, non-glare protective cover finish that provides a subtle, sophisticated appearance.",
    tone: "charcoal",
  },
  {
    name: "Gloss Lamination",
    description:
      "A shiny, reflective finish that enhances color vibrancy and provides extra protection for your covers.",
    tone: "gold",
  },
  {
    name: "Perfect Binding or Hardcover",
    description:
      "The choice between clean perfect binding and premium hardcover depending on your budget and reader audience.",
    tone: "espresso",
  },
];

export const serviceFaqs: ServiceFaq[] = [
  {
    label: "How do I start a project with Denva Books?",
    content:
      "Reach out through our contact form, email or WhatsApp. Tell us what you currently have: an idea, a draft or a finished file. We will schedule an introductory discovery conversation and outline the exact next steps.",
  },
  {
    label: "What is the difference between an autobiography and a memoir?",
    content:
      "An autobiography is a comprehensive, factual and chronological account of your entire life, covering your achievements, challenges and journey. A memoir focuses on a specific period, theme or set of experiences, allowing for deeper reflection on key turning points.",
  },
  {
    label: "What is included in the ghostwriting packages?",
    content:
      "Our ghostwriting packages include comprehensive interviews, audio transcription, manuscript writing, developmental editing, final proofreading, ISBN registration and book design. All work is protected under a strict Non-Disclosure Agreement (NDA).",
  },
  {
    label: "What is the minimum quantity and turnaround for book printing?",
    content:
      "Our minimum print run is 300 copies. Standard printing turnaround ranges from 9 to 15 business days depending on volume and binding specifications. Expedited printing is available for authors with urgent launch deadlines.",
  },
  {
    label: "What factors influence printing costs?",
    content:
      "Printing pricing depends on page count, quantity of copies, book size, paper type (mechanized creamish vs white bond), binding style (perfect binding vs hardcover), and lamination (matte vs gloss). We provide tailored quotes based on your exact specifications.",
  },
  {
    label: "Can you assist with Amazon Kindle digital publishing?",
    content:
      "Yes. You create and verify your own Amazon KDP account so you retain complete ownership, rights and royalties. Denva Books prepares the formatted digital files, cover specifications and assists with the upload process.",
  },
  {
    label: "Do you distribute books directly to bookstores?",
    content:
      "Denva Books does not operate an automatic bookstore distribution network where books are placed in shops automatically. We equip you with professional ISBN registration, print quality, marketing collateral and launch support, while authors coordinate retail distribution directly with bookstores.",
  },
  {
    label: "What is your standard payment structure?",
    content:
      "Our standard payment arrangement is a 70% deposit upon project commencement and agreement of scope, with the remaining 30% balance due upon project completion and delivery.",
  },
];
