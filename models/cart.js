import mongoose, { Schema, models } from 'mongoose';

const CartItemSchema = new Schema({
  productId: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
  variantId: {
    type: Schema.Types.ObjectId,
    ref: 'Variant',
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    default: 1,
  },
  image:{
    type: String,
  }
});

const CartSchema = new Schema({
  clerkId: {
    type: String,
    required: true,
    unique: true,
  },
  items: [CartItemSchema],
}, { timestamps: true });

const Cart = models.Cart || mongoose.model('Cart', CartSchema);

export default Cart;
