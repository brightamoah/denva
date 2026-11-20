export interface HouseFact {
  label: string;
  value: string;
}

export interface HousePrinciple {
  title: string;
  description: string;
}

export interface EntryPoint {
  number: string;
  title: string;
  description: string;
}

export interface TeamRole {
  role: string;
  description: string;
}

export const houseFacts: HouseFact[] = [
  { label: "Based in", value: "Accra, Ghana" },
  { label: "Clients", value: "Ghana & the US" },
  { label: "Minimum print run", value: "300 copies" },
];

export const missionStatement
  = "To empower authors, enabling them to create a meaningful impact with their ideas and generate substantial income from their writing. We achieve this through excellent, stress-free publishing services and expert advisory support.";

export const visionStatement
  = "To become a household publishing name on the African continent and a worldwide player in the publishing business.";

export const aboutIntro
  = "Denva Books is a publishing consultancy in Accra, Ghana. We help individuals and businesses realise their publishing goals at every stage, from the first idea or manuscript to a professionally finished, printed and published book.";

/**
 * The eight core values from the brand guide, each shortened to a single
 * readable line.
 */
export const housePrinciples: HousePrinciple[] = [
  {
    title: "Excellence",
    description:
      "World-class publishing services and advisory support, held to the highest standard of quality.",
  },
  {
    title: "Customer-Centric",
    description:
      "We understand what you need and keep the process simple, clear and stress-free.",
  },
  {
    title: "Creativity & Innovation",
    description:
      "Creative thinking and better ways to support and amplify authors' ideas.",
  },
  {
    title: "Continuous Learning",
    description:
      "We stay current with the industry and keep improving as publishing changes.",
  },
  {
    title: "Respect",
    description:
      "Fairness, dignity and respect for every author, whatever their background.",
  },
  {
    title: "Teamwork",
    description:
      "One team working together on your book, with different skills at the table.",
  },
  {
    title: "Leadership & Accountability",
    description:
      "Ownership of the work and transparency in every decision we make.",
  },
  {
    title: "Beauty & Colour",
    description:
      "Designs and colours chosen carefully to express the message behind the book.",
  },
];

/**
 * Authors can enter the process at three different points.
 */
export const entryPoints: EntryPoint[] = [
  {
    number: "01",
    title: "You have an idea",
    description:
      "A story, a topic or a message, but no manuscript yet. We plan the book, interview you and write it with you.",
  },
  {
    number: "02",
    title: "You have a manuscript",
    description:
      "A draft that needs a professional eye. We review, edit and proofread it, then design and print it.",
  },
  {
    number: "03",
    title: "You have a finished book",
    description:
      "A designed file that needs production. We handle printing, ISBN assistance, Kindle publishing or launch support.",
  },
];

export const audiences = [
  "First-time authors",
  "Experienced authors",
  "Professionals",
  "Entrepreneurs & business owners",
  "Teachers & educators",
  "Pastors & church leaders",
  "Memoir & autobiography writers",
  "Novelists & poets",
  "Organisations",
];

export const teamRoles: TeamRole[] = [
  {
    role: "Lead Writer",
    description:
      "Writes the manuscript with you, in your voice, chapter by chapter.",
  },
  {
    role: "Project Supervisor",
    description:
      "Keeps the work on scope, on schedule and at the standard we promised.",
  },
  {
    role: "Transcriber",
    description:
      "Turns interviews and recordings into clean, usable text.",
  },
  {
    role: "Editor & Proofreader",
    description:
      "Refines the writing and catches the final errors before print.",
  },
];
