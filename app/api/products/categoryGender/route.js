import { connectToDB } from "@/utils/database";
import Product from "@/models/product";

export async function GET(req) {
  if (req.method === 'GET') {
    const url = new URL(req.url, process.env.NEXT_PUBLIC_BACKEND_PROD_URL ? process.env.NEXT_PUBLIC_BACKEND_PROD_URL : process.env.NEXT_PUBLIC_BACKEND_DEV_URL);
    const category = url.searchParams.get('category');
    const gender = url.searchParams.get('gender');
    
    try {
      await connectToDB();

      const query = {};
      if (category) {
        query.category = category;
      }
      if (gender) {
        query.gender = gender;
      }

      const products = await Product.find(query).sort({ createdAt: -1 }).exec();
      if (products.length > 0) {
        return new Response(JSON.stringify(products), { status: 200 });
      } else {
        return new Response(JSON.stringify({ error: 'No products found for the given category and gender' }), { status: 404 });
      }
    } catch (error) {
      console.error('Error fetching products by category and gender:', error);
      return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
  } else {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405 });
  }
}
