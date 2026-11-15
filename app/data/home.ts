export interface HeroSlide {
  src: string;
  alt: string;
  index: string;
  title: string;
  caption: string;
}

export interface EditionItem {
  title: string;
  category: string;
  specification: string;
  image: string;
  alt: string;
  to: string;
}

export interface ServiceItem {
  number: string;
  title: string;
  summary: string;
  to: string;
}

export interface EditorialQuote {
  quote: string;
  attribution: string;
  context: string;
}

export const heroSlides: HeroSlide[] = [
  {
    src: "/images/hero-athena.jpg",
    alt: "Bespoke linen-bound hardcover books and brass fountain pen on travertine desk",
    index: "I",
    title: "Heirloom Editions",
    caption: "Hand-sewn Belgian linen & blind-debossed 24kt gold foil",
  },
  {
    src: "/images/atelier-craft.jpg",
    alt: "Cotton manuscript sheets, vintage fountain pen, and bookbinding tools on walnut bench",
    index: "II",
    title: "Private Ghostwriting",
    caption: "Confidential literary capture on archival cotton rag",
  },
  {
    src: "/images/book-monograph.jpg",
    alt: "Deep emerald cloth collector monograph resting on dark slate",
    index: "III",
    title: "Collector Monographs",
    caption: "Museum-grade color separation & Swiss lay-flat bindings",
  },
];

export const marqueeItems = [
  "Confidential Ghostwriting",
  "Private Memoirs",
  "Architectural Monographs",
  "Heirloom Bindery",
  "Archival Letterpress",
  "Global Distribution",
  "Family Chronicles",
];

export const editions: EditionItem[] = [
  {
    title: "The Geneva Notebooks",
    category: "Private Memoir",
    specification: "Belgian Ivory Linen · Edition of 150",
    image: "/images/book-memoir.jpg",
    alt: "Ivory linen-bound bespoke memoir resting on a travertine plinth",
    to: "/store",
  },
  {
    title: "Form & Limestone",
    category: "Architectural Monograph",
    specification: "Emerald Cloth · Swiss-Bound",
    image: "/images/book-monograph.jpg",
    alt: "Deep teal cloth collector monograph on dark slate",
    to: "/store",
  },
  {
    title: "Four Generations in Kyoto",
    category: "Legacy Chronicle",
    specification: "Hand-Bound Espresso Calfskin · Gilt Edges",
    image: "/images/book-chronicle.jpg",
    alt: "Espresso leather-bound heirloom chronicle with gilt page edges",
    to: "/store",
  },
  {
    title: "Essays on Quiet Permanence",
    category: "Literary Edition",
    specification: "Charcoal Buckram & Custom Slipcase",
    image: "/images/book-edition.jpg",
    alt: "Charcoal linen literary edition inside a custom slipcase",
    to: "/store",
  },
];

export const services: ServiceItem[] = [
  {
    number: "01",
    title: "Confidential Ghostwriting",
    summary:
      "Intimate recorded dialogues with seasoned literary biographers who capture your exact voice under strict NDA.",
    to: "/services",
  },
  {
    number: "02",
    title: "Developmental & Line Editing",
    summary:
      "Structural architecture, archival verification, and exacting prose refinement to literary house standards.",
    to: "/services",
  },
  {
    number: "03",
    title: "Heirloom Design & Bindery",
    summary:
      "Custom serif typography, Belgian bookcloth, Italian calfskin, foil stamping, and hand-crafted slipcases.",
    to: "/services",
  },
  {
    number: "04",
    title: "Global Publishing & Imprint",
    summary:
      "ISBN imprint stewardship, museum and fine bookshop placement, international press, and rights management.",
    to: "/services",
  },
  {
    number: "05",
    title: "Private Family Chronicles",
    summary:
      "Multi-generational histories and photographic archives produced in strictly limited private runs.",
    to: "/services",
  },
  {
    number: "06",
    title: "Art & Collector Monographs",
    summary:
      "Museum-grade color separation, 150gsm cotton paper, and lay-flat Smyth-sewn bindings for galleries and studios.",
    to: "/services",
  },
];

export interface AtelierStage {
  title: string;
  description: string;
}

export const atelierStages: AtelierStage[] = [
  {
    title: "I. The Private Dialogue",
    description:
      "Across unhurried conversations, your dedicated ghostwriter distills decades of insight and lived memory in strict confidence.",
  },
  {
    title: "II. The Literary Manuscript",
    description:
      "Chapter by chapter, senior editors shape cadence, structure, and historical precision until every sentence reads effortlessly as yours.",
  },
  {
    title: "III. The Heirloom Object",
    description:
      "European binderies finish each volume in tactile linen, archival cotton rag, and custom slipcases made to endure generations.",
  },
];

export const editorialNotes: EditorialQuote[] = [
  {
    quote:
      "A great book does not merely record a life or a body of work—it gives permanence to the voice behind it, long after the room has emptied.",
    attribution: "Editorial Charter",
    context: "Denva Books · On Literary Permanence",
  },
  {
    quote:
      "True discretion is the quiet foundation of great ghostwriting: the finest pages never reveal the hand that helped transcribe them.",
    attribution: "Private Commissions",
    context: "Denva Books · On Confidentiality",
  },
  {
    quote:
      "Paper weight, thread tension, and typographic proportion are never ornament—they are the architecture through which thought is felt.",
    attribution: "The Bindery",
    context: "Denva Books · On Material Craft",
  },
];
