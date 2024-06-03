import { z } from 'zod';

const variantSchema = z.object({
  color: z.string().min(1, 'Color is required'),
  images: z.array(z.string()).min(1, 'At least one image is required'),
  stock: z.array(
    z.object({
      size: z.string(),
      quantity: z.number().min(0),
    })
  ).min(1, 'At least one size with quantity is required'),
});

export default variantSchema;
