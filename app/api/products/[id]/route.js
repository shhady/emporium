import { connectToDB } from "@/utils/database";
import Product from "@/models/product";

export async function GET(req, {params} ) {
  // const { id } = req.query;
    // console.log('im hereeee ====', req);
  if (req.method === 'GET') {
    try {
      await connectToDB(); // Ensure the database is connected

      const product = await Product.findById(params.id).exec(); // Find the product by ID
      if (product) {
        return new Response(JSON.stringify(product),{status:200}); // Respond with the product data
      } else {
        return new Response(JSON.stringify('Product not found'),{status:404});// Product not found
      }
    } catch (error) {
      console.error('Error fetching product:', error);
      return new Response(JSON.stringify(error.message),{status:500});
      // return res.status(500).json({ error: 'Error fetching product', details: error.message });
    }
  } else {
    return new Response(JSON.stringify('Method not allowed'),{status:405});
  }
}
