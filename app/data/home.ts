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

/**
 * The homepage hero describes what Denva actually does, in the order most
 * clients meet the service: writing first, then editorial and design, then
 * printing and publishing.
 */
export const heroSlides: HeroSlide[] = [
  {
    src: "/images/hero-athena.jpg",
    alt: "A stack of printed hardcover books and a fountain pen on a desk",
    index: "I",
    title: "Writing & Ghostwriting",
    caption: "From your idea, notes or recordings to a finished manuscript",
  },
  {
    src: "/images/atelier-craft.jpg",
    alt: "Printed manuscript pages, a pen and bookbinding tools on a workbench",
    index: "II",
    title: "Editing & Book Design",
    caption: "Manuscript review, editing, proofreading, cover and interior layout",
  },
  {
    src: "/images/book-monograph.jpg",
    alt: "A cloth-bound book resting on a dark surface",
    index: "III",
    title: "Printing & Publishing",
    caption: "ISBN assistance, quality book printing and launch support",
  },
];

export const marqueeItems = [
  "Ghostwriting",
  "Editing & Proofreading",
  "Cover Design",
  "Interior Layout",
  "ISBN Assistance",
  "Book Printing",
  "Kindle Publishing",
  "Book Launch Support",
];

/**
 * Book types Denva works with. These replace the invented "editions"
 * catalogue with the real categories the team publishes.
 */
export const editions: EditionItem[] = [
  {
    title: "Autobiography & Memoir",
    category: "Life Stories",
    specification: "Interviews · Writing · Editing · Printing",
    image: "/images/book-memoir.jpg",
    alt: "A light-coloured hardcover book resting on a stone surface",
    to: "/services",
  },
  {
    title: "Business & Non-Fiction",
    category: "Ideas & Expertise",
    specification: "Structure · Editing · Cover Design · ISBN",
    image: "/images/book-monograph.jpg",
    alt: "A dark cloth-bound book photographed on a dark surface",
    to: "/services",
  },
  {
    title: "Novels & Poetry",
    category: "Fiction & Verse",
    specification: "Review · Editing · Layout · Printing",
    image: "/images/book-chronicle.jpg",
    alt: "A leather-bound book with gilt page edges",
    to: "/services",
  },
  {
    title: "Faith & Ministry",
    category: "Churches & Church Leaders",
    specification: "Editing · Design · Printing · Launch Support",
    image: "/images/book-edition.jpg",
    alt: "A charcoal-bound book presented inside a slipcase",
    to: "/services",
  },
];

export const services: ServiceItem[] = [
  {
    number: "01",
    title: "Writing & Ghostwriting",
    summary:
      "Autobiographies, memoirs, business books, novels and non-fiction, written with you and in your voice.",
    to: "/services",
  },
  {
    number: "02",
    title: "Manuscript Review, Editing & Proofreading",
    summary:
      "A five-area manuscript review, followed by editing and proofreading that make the book clear and readable.",
    to: "/services",
  },
  {
    number: "03",
    title: "Cover Design & Interior Layout",
    summary:
      "Cover development, page layout, formatting and print-ready files prepared to professional standards.",
    to: "/services",
  },
  {
    number: "04",
    title: "ISBN & Pre-press",
    summary:
      "ISBN assistance, digital publishing preparation and the final checks a book needs before it goes to print.",
    to: "/services",
  },
  {
    number: "05",
    title: "Book Printing",
    summary:
      "High-quality digital printing from 300 copies, on white or creamish bond paper, with matte or gloss covers.",
    to: "/services",
  },
  {
    number: "06",
    title: "Book Launch & Marketing",
    summary:
      "Launch planning, promotional materials and practical marketing support, including Amazon Kindle assistance.",
    to: "/services",
  },
];

export interface AtelierStage {
  title: string;
  description: string;
}

export const atelierStages: AtelierStage[] = [
  {
    title: "01. The Conversation",
    description:
      "We start by understanding where your book is now: an idea, a manuscript or a finished file. Then we agree what needs to happen next.",
  },
  {
    title: "02. The Manuscript",
    description:
      "Interviews, transcription, writing, editing and proofreading are shaped chapter by chapter, with your feedback at every stage.",
  },
  {
    title: "03. The Printed Book",
    description:
      "Cover, layout, ISBN and printing come together, followed by launch support if you want to take the book further.",
  },
];

/**
 * Real statements taken from Denva's stated core values. These are company
 * commitments, not invented client testimonials.
 */
export const editorialNotes: EditorialQuote[] = [
  {
    quote:
      "We are committed to delivering world-class publishing services and advisory support, maintaining the highest standards of quality.",
    attribution: "Excellence",
    context: "Denva Books · Our Core Values",
  },
  {
    quote:
      "We place a high value on understanding your needs and exceeding your expectations, keeping the process simple and stress-free.",
    attribution: "Customer-Centric",
    context: "Denva Books · Our Core Values",
  },
  {
    quote:
      "We value creative thinking and encourage innovative approaches in every part of our work, constantly looking for better ways to support authors.",
    attribution: "Creativity & Innovation",
    context: "Denva Books · Our Core Values",
  },
  {
    quote:
      "We treat every author with fairness, dignity and respect, and take ownership of the work from the first conversation to the finished book.",
    attribution: "Respect & Accountability",
    context: "Denva Books · Our Core Values",
  },
];
