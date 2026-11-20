export interface StoreEdition {
  id: string;
  title: string;
  category: string;
  edition: string;
  price: number;
  image: string;
  alt: string;
  description: string;
  stock: number;
}

export interface StoreAssurance {
  title: string;
  description: string;
}

export const storeEditions: StoreEdition[] = [
  {
    id: "geneva-notebooks",
    title: "The Geneva Notebooks",
    category: "Private Memoir",
    edition: "Edition of 150 · Belgian ivory linen",
    price: 480,
    image: "/images/book-memoir.jpg",
    alt: "Ivory linen-bound bespoke memoir resting on a travertine plinth",
    description:
      "A quiet memoir of a life lived between Geneva and the coast, bound in ivory linen with a blind-debossed spine.",
    stock: 4,
  },
  {
    id: "form-and-limestone",
    title: "Form & Limestone",
    category: "Architectural Monograph",
    edition: "Edition of 300 · Emerald cloth",
    price: 620,
    image: "/images/book-monograph.jpg",
    alt: "Deep teal cloth collector monograph on dark slate",
    description:
      "A study of stone, proportion, and the buildings that teach a city how to stand. Printed on 150gsm cotton rag.",
    stock: 7,
  },
  {
    id: "four-generations",
    title: "Four Generations in Kyoto",
    category: "Legacy Chronicle",
    edition: "Edition of 80 · Espresso calfskin",
    price: 1250,
    image: "/images/book-chronicle.jpg",
    alt: "Espresso leather-bound heirloom chronicle with gilt page edges",
    description:
      "A family chronicle across four generations, hand-bound in espresso calfskin with gilt edges and a cloth slipcase.",
    stock: 2,
  },
  {
    id: "quiet-permanence",
    title: "Essays on Quiet Permanence",
    category: "Literary Edition",
    edition: "Edition of 200 · Charcoal buckram",
    price: 390,
    image: "/images/book-edition.jpg",
    alt: "Charcoal linen literary edition inside a custom slipcase",
    description:
      "Eleven essays on memory, material, and the things we choose to keep. Charcoal buckram with a printed slipcase.",
    stock: 9,
  },
  {
    id: "atelier-folio",
    title: "The Atelier Folio",
    category: "Studio Edition",
    edition: "Edition of 100 · Loose-leaf portfolio",
    price: 180,
    image: "/images/atelier-craft.jpg",
    alt: "Bookbinding workbench with cotton manuscript pages, fountain pen, and linen swatches",
    description:
      "A printed portfolio of bindery notes, paper samples, and typographic studies from the Denva studio.",
    stock: 12,
  },
  {
    id: "house-prospectus",
    title: "The House Prospectus",
    category: "Studio Edition",
    edition: "Edition of 250 · Letterpress wraps",
    price: 95,
    image: "/images/hero-athena.jpg",
    alt: "Bespoke linen-bound hardcover books and brass fountain pen on travertine desk",
    description:
      "A letterpress prospectus introducing the house, its disciplines, and the standard of object it exists to make.",
    stock: 18,
  },
];

export const storeAssurances: StoreAssurance[] = [
  {
    title: "Numbered & recorded",
    description: "Every edition leaves the bindery numbered, checked, and entered in the house ledger.",
  },
  {
    title: "Packed by the bindery",
    description: "Books are wrapped in archival paper and shipped insured, with a certificate of authenticity.",
  },
  {
    title: "Private viewings",
    description: "Collectors are welcome to examine an edition by appointment in London or New York.",
  },
];
