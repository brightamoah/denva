export interface ServiceDetail {
  slug: string;
  title: string;
  summary: string;
  includes: string[];
  timeline: string;
  image: string;
  alt: string;
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

/**
 * The six services Denva actually offers, in the order most authors meet
 * them. Copy is kept to one line where possible; the detail lives in the
 * four-item "includes" list.
 */
export const serviceDetails: ServiceDetail[] = [
  {
    slug: "ghostwriting",
    title: "Ghostwriting & Autobiography",
    summary:
      "Your story, written in your voice, from a rough idea, notes or recordings to a finished manuscript.",
    includes: [
      "Discovery meeting and concept outline",
      "Interviews, notes and transcription",
      "Chapter drafts with your feedback",
      "Editing and proofreading before delivery",
    ],
    timeline: "3–12 months, depending on length",
    image: "/images/book-memoir.jpg",
    alt: "A light-coloured hardcover book resting on a stone surface",
  },
  {
    slug: "editing",
    title: "Manuscript Review, Editing & Proofreading",
    summary:
      "A professional review of substance, logic, coherence, clarity and grammar, followed by editing and a final proofread.",
    includes: [
      "Five-area manuscript review report",
      "Structural and line editing",
      "Proofreading after layout",
      "Clean, print-ready files",
    ],
    timeline: "Agreed around your manuscript",
    image: "/images/atelier-craft.jpg",
    alt: "Printed manuscript pages, a pen and bookbinding tools on a workbench",
  },
  {
    slug: "design",
    title: "Cover Design & Interior Layout",
    summary:
      "A cover that fits the book, and an interior that is comfortable to read from the first page to the last.",
    includes: [
      "Cover design from your brief",
      "Page size, margins and typography",
      "Chapter styles and front/back matter",
      "Print-ready layout files",
    ],
    timeline: "Agreed per project",
    image: "/images/book-edition.jpg",
    alt: "A charcoal-bound book presented inside a slipcase",
  },
  {
    slug: "publishing",
    title: "ISBN & Publishing Preparation",
    summary:
      "ISBN assistance, formatting and the final checks your files need before printing or digital release.",
    includes: [
      "ISBN guidance and assistance",
      "Digital publishing preparation",
      "Amazon Kindle upload support",
      "Final pre-press checks",
    ],
    timeline: "Agreed per project",
    image: "/images/book-monograph.jpg",
    alt: "A dark cloth-bound book photographed on a dark surface",
  },
  {
    slug: "printing",
    title: "Book Printing",
    summary:
      "High digital printing from 300 copies, in A5, A4 or a custom size, on paper and finish you choose.",
    includes: [
      "White or creamish bond paper",
      "Matte or gloss lamination",
      "Perfect binding or hardcover",
      "9–15 business days standard",
    ],
    timeline: "9–15 business days (expedited available)",
    image: "/images/hero-athena.jpg",
    alt: "A stack of printed hardcover books and a fountain pen on a desk",
  },
  {
    slug: "launch",
    title: "Book Launch & Marketing",
    summary:
      "Launch planning, branded materials and practical marketing support, so the book gets a proper send-off.",
    includes: [
      "Launch consultation and planning",
      "Banners, backdrops and branded materials",
      "Promotional and social media content",
      "Kindle and digital publishing support",
    ],
    timeline: "Planned around your launch date",
    image: "/images/book-chronicle.jpg",
    alt: "A leather-bound book with gilt page edges",
  },
];

export const serviceProcess: ServiceProcessStep[] = [
  {
    number: "01",
    title: "Share your idea",
    description:
      "Tell us where the book is now: an idea, a draft or a finished file. That decides what happens next.",
  },
  {
    number: "02",
    title: "Get a plan and quote",
    description:
      "We confirm the scope, timeline and cost in writing before work begins.",
  },
  {
    number: "03",
    title: "We do the work",
    description:
      "Writing, editing, design, ISBN and printing, with your approval at each stage.",
  },
  {
    number: "04",
    title: "Publish and launch",
    description:
      "Your books are delivered, your digital edition goes live, and your launch is supported.",
  },
];

export const printSpecs: PrintSpec[] = [
  {
    name: "White bond paper",
    description: "Clean, classic and cost-effective for most books.",
    tone: "ivory",
  },
  {
    name: "Creamish bond paper",
    description: "A natural, durable finish with a premium feel.",
    tone: "linen",
  },
  {
    name: "A5, A4 or custom",
    description: "Standard book sizes or a trim that suits the content.",
    tone: "navy",
  },
  {
    name: "Matte lamination",
    description: "A smooth, non-glare cover finish.",
    tone: "charcoal",
  },
  {
    name: "Gloss lamination",
    description: "A bright, reflective cover finish with extra protection.",
    tone: "gold",
  },
  {
    name: "Perfect or hardcover",
    description: "Perfect binding for standard runs; hardcover for a premium finish.",
    tone: "espresso",
  },
];

export const serviceFaqs: ServiceFaq[] = [
  {
    label: "How do I start?",
    content:
      "Send a short note about your book, or call us. Tell us where the book is now, whether that is an idea, a manuscript or a finished file, and we will explain the next step.",
  },
  {
    label: "What if I only have an idea?",
    content:
      "That is the normal starting point. We can plan the book, interview you, write the manuscript and take it through editing and design.",
  },
  {
    label: "Do I need an ISBN?",
    content:
      "If you plan to print and sell the book, yes. We can guide you through the requirements and assist with the ISBN process.",
  },
  {
    label: "How much does printing cost?",
    content:
      "It depends on the page count, size, quantity, paper, cover and binding. Our minimum print run is 300 copies, and we quote per project.",
  },
  {
    label: "Can you publish on Amazon Kindle?",
    content:
      "Yes. You create and verify your own Amazon account, and we assist with the upload and publishing process.",
  },
  {
    label: "Do you place books in bookstores?",
    content:
      "We do not operate a bookstore distribution network. We prepare the book professionally, support digital publishing and marketing, and help with the launch; authors usually approach bookstores themselves.",
  },
];
