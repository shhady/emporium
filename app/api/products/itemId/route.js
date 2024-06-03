import { connectToDB } from "@/utils/database";
import Product from "@/models/product";

export async function GET(req) {
  if (req.method === 'GET') {
    // const { category, gender } = req.query;
    const url = new URL(req.url, 'http://localhost:3000');
      const itemId = url.searchParams.get('itemId');
      console.log(itemId);
    try {
      await connectToDB();

      const query = {};
      if (itemId) {
        query.itemId = itemId;
      }

      const products = await Product.find(query).exec();
      if (products.length > 0) {
        return new Response(JSON.stringify(products), { status: 200 });
      } else {
        return new Response(JSON.stringify({ error: 'No products found for the given itemId' }), { status: 404 });
      }
    } catch (error) {
      console.error('Error fetching products by itemId:', error);
      return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
  } else {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405 });
  }
}
