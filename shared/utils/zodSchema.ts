import * as z from "zod";
import "zod/compile";

export const contactUsSchema = z.object({
  name: z.string().min(1, "Please enter your name."),
  email: z.email("Please enter a valid email address."),
  topic: z.string().min(1, "Please enter a topic."),
  message: z.string().min(1, "Please enter a message."),
  confidential: z.boolean(),
});
