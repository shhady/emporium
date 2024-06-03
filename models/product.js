import mongoose, {models} from "mongoose";
const Schema = mongoose.Schema;

const variantSchema = new Schema({
  color: { type: String, required: true },
  images: { type: [String], default: [] },
  stock: [{
    size: { type: String, required: true },
    quantity: { type: Number, required: true, min: 0 }
  }]
});

// Define the main product schema and reference the variant schema
const productSchema = new Schema({
  description: { type: String, required: true },
  price: { type: Number, required: true, min: 0 },
  gender: { type: String, required: true },
  category: { type: String, required: true },
  brand: { type: String, required: true },
  season: { type: String, required: true },
  variants: [variantSchema],
}, { timestamps: true });

const Product = models.Product || mongoose.model('Product', productSchema);

export default Product;