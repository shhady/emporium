import { connectToDB } from "@/utils/database";
import Cart from "@/models/cart";
import User from "@/models/user";
import Product from "@/models/product";

export async function GET(req, { params }) {
    const {clerkId} = params
    if (req.method === 'GET') {
        try {
            await connectToDB();
          //   const clerkId = req.url.split('/').pop();
        
            // Fetch user details
            const user = await User.findOne({ clerkId }).exec();
            if (!user) {
              return new Response(JSON.stringify({ message: "User not found" }), { status: 404 });
            }
        
            // Fetch cart details and populate items
            const cart = await Cart.findOne({ clerkId })
              .populate({
                path: 'items.productId',
                model: Product,
              })
             
              .exec();
        
            if (!cart) {
              return new Response(JSON.stringify({ user, cartItems: [] }), { status: 200 });
            }
        
            return new Response(JSON.stringify({ user, cartItems: cart.items }), { status: 200 });
          } catch (error) {
            console.error('Error fetching cart:', error);
            return new Response(JSON.stringify({ message: error.message }), { status: 500 });
          }
    }
   
  }