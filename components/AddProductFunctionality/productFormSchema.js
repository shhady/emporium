import { z } from "zod";

const formSchema = z.object({
  itemId: z.string().min(2, {
    message: "TshirtId must be at least 2 characters.",
  }),
  gender: z.string().min(2, {
    message: "Gender must be at least 2 characters.",
  }),
  category: z.string().min(2, {
    message: "Item name must be at least 2 characters.",
  }),
  brand: z.string().min(2, {
    message: "Brand name must be at least 2 characters.",
  }),
  description: z.string(),
  variants: z.array()
});

export default formSchema;

