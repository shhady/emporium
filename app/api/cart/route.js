import { connectToDB } from "@/utils/database";
import Cart from "@/models/cart";

export async function POST(req) {
  try {
    await connectToDB();
    const { clerkId, productId, variantId, size, color, image } = await req.json();

    let cart = await Cart.findOne({ clerkId });
    if (!cart) {
      cart = new Cart({ clerkId, items: [] });
    }

    const existingItemIndex = cart.items.findIndex(
      item => item.productId.toString() === productId &&
              item.variantId.toString() === variantId &&
              item.size === size &&
              item.color === color &&
              item.image === image
    );

    if (existingItemIndex > -1) {
      cart.items[existingItemIndex].quantity += 1;
    } else {
      cart.items.push({ productId, variantId, size, color,image });
    }

    await cart.save();

    return new Response(JSON.stringify(cart), { status: 200 });
  } catch (error) {
    console.error('Error adding to cart:', error);
    return new Response(JSON.stringify({ message: error.message }), { status: 500 });
  }
}

