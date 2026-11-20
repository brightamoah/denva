import { z } from "zod";

export const contactUsSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.email("Please enter a valid email address."),
  topic: z.string().min(1, "Choose what your enquiry is about."),
  message: z.string().min(10, "A sentence or two is enough."),
});
