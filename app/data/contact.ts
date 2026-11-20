export interface ContactFact {
  label: string;
  value: string;
  href?: string;
}

export interface ContactNote {
  title: string;
  description: string;
}

export interface SocialLink {
  label: string;
  handle: string;
  href: string;
}

export const contactEmail = "denvabooksgh@gmail.com";
export const contactPhone = "+233 55 222 3232";
export const contactPhoneAlt = "053 885 9406";

export const contactTopics = [
  "Ghostwriting",
  "Editing & proofreading",
  "Cover design & layout",
  "ISBN & publishing",
  "Book printing",
  "Book launch & marketing",
  "Something else",
];

export const contactFacts: ContactFact[] = [
  { label: "Email", value: contactEmail, href: `mailto:${contactEmail}` },
  { label: "Phone / WhatsApp", value: contactPhone, href: "tel:+233552223232" },
  { label: "Second line", value: contactPhoneAlt, href: "tel:+233538859406" },
  { label: "Location", value: "Accra, Ghana" },
];

export const contactNotes: ContactNote[] = [
  {
    title: "What to send",
    description:
      "Where the book is now, whether you have an idea, a manuscript or a finished file, plus what you want it to do and roughly when you need it.",
  },
  {
    title: "What happens next",
    description:
      "We read your note, explain the next step and, where the project is a fit, prepare a clear quote for the work.",
  },
  {
    title: "How pricing works",
    description:
      "Quotes depend on the service and the book's specifications. Our minimum print run is 300 copies, and the standard payment structure is 70% deposit and 30% balance.",
  },
];

export const socialLinks: SocialLink[] = [
  {
    label: "Instagram",
    handle: "@denvabooks1",
    href: "https://www.instagram.com/denvabooks1",
  },
  {
    label: "Facebook",
    handle: "Denva Books",
    href: "https://www.facebook.com/denvabooks1",
  },
  {
    label: "LinkedIn",
    handle: "Denva Books",
    href: "https://www.linkedin.com/company/denva-books",
  },
];
