import { connectToDB } from "@/utils/database";
import Product from "@/models/product";

export const POST = async (req, res) => {
    try {
        const data = await req.json();  // Parse the request body as JSON
console.log(data);
        await connectToDB();  // Ensure the database is connected

        const newProduct = new Product(data);
        await newProduct.save();  // Save the new product to the database

        return new Response(JSON.stringify(newProduct), { status: 201 });  // Respond with the new product data
    } catch (error) {
        console.error('Error adding product:', error);  // Log any errors
        return new Response('Failed to add product', { status: 400 });
    }
};
