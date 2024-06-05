import { connectToDB } from "@/utils/database";
import User from "@/models/user";

export const POST = async (req, res) => {
    try {
        const data = await req.json();  // Parse the request body as JSON
        console.log(data);
        await connectToDB();  // Ensure the database is connected

        const newUser = new User(data);
        await newUser.save();  // Save the new product to the database

        return new Response(JSON.stringify(newUser), { status: 201 });  // Respond with the new product data
    } catch (error) {
        console.error('Error adding product:', error);  // Log any errors
        return new Response('Failed to add product', { status: 400 });
    }
};
