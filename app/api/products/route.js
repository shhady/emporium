import { connectToDB } from "@/utils/database";
import Product from "@/models/product";

export const GET = async (req, res) =>{
    console.log('----------------------------------------------------------------getting here');
    try {
        await connectToDB();
        const products = await Product.find({}).sort({ createdAt: -1 })
        return new Response(JSON.stringify(products), { status: 200});
    } catch (error) {
        return new Response ('failed to fetch products')
    }
}