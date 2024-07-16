import { connectToDB } from "@/utils/database";
import User from "@/models/user";

export async function GET(req, { params }) {
  // Ensure the database is connected
  await connectToDB();

  // Extract clerkId from request params
  const { id } = params;
    console.log(id);
  if (req.method === 'GET') {
    try {
      // Find the user by clerkId
      const user = await User.findOne({ clerkId:id }).exec();

      if (user) {
        // Respond with the user data
        return new Response(JSON.stringify(user), { status: 200 });
      } else {
        // User not found
        return new Response(JSON.stringify('User not found'), { status: 404 });
      }
    } catch (error) {
      console.error('Error fetching user:', error);
      return new Response(JSON.stringify(error.message), { status: 500 });
    }
  } else {
    return new Response(JSON.stringify('Method not allowed'), { status: 405 });
  }
}
export async function PUT(req, { params }) {
    // Ensure the database is connected
    await connectToDB();
  
    // Extract clerkId from request params
    const { id } = params;
      console.log(id);
      try {
        // Parse the request body to get updated data
        const body = await req.json();
        console.log(body);
        const { city, street, houseNumber ,phoneNumber} = body;
    
        // Update the user by clerkId
        const updatedUser = await User.findOneAndUpdate(
          { clerkId: id },
          { city,street,houseNumber, phoneNumber },
          { new: true, runValidators: true }
        );
    
        if (updatedUser) {
          // Respond with the updated user data
          return new Response(JSON.stringify(updatedUser), { status: 200 });
        } else {
          // User not found
          return new Response(JSON.stringify('User not found'), { status: 404 });
        }
      } catch (error) {
        console.error('Error updating user:', error);
        return new Response(JSON.stringify(error.message), { status: 500 });
      }
  }
  

