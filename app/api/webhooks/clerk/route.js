import { Webhook } from 'svix';
import { headers } from 'next/headers';
import { WebhookEvent } from '@clerk/nextjs/server';
import User from '@/models/user';
import { connectToDB } from "@/utils/database";

export async function POST(req) {
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error('Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local');
  }

  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error occurred -- no svix headers', { status: 400 });
  }

  // Read the request body
  let body = '';
  try {
    const reader = req.body.getReader();
    const decoder = new TextDecoder();
    let done = false;

    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      body += decoder.decode(value);
    }
  } catch (error) {
    console.error('Error reading request body:', error);
    return new Response('Error reading request body', { status: 400 });
  }

  const payload = JSON.parse(body);

  const wh = new Webhook(WEBHOOK_SECRET);

  let evt;

  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    });
  } catch (err) {
    console.error('Error verifying webhook:', err);
    return new Response('Error occurred', { status: 400 });
  }

  const { id, type } = evt.data;
  console.log(`Webhook with an ID of ${id} and type of ${type}`);
  console.log('Webhook body:', body);

  if (type === 'user.created') {
    const { id, email_addresses, image_url, first_name, last_name, username } = evt.data;

    const user = {
      clerkId: id,
      email: email_addresses[0].email_address,
      username,
      firstName: first_name,
      lastName: last_name,
      photo: image_url,
      role: 'user'
    };

    console.log('Creating user:', user);

    try {
      await connectToDB();
      const newUser = new User(user);
      await newUser.save();
      console.log('User created successfully:', newUser);
      return new Response(JSON.stringify(newUser), { status: 201 });
    } catch (error) {
      console.error('Error creating user:', error);
      return new Response('Failed to create user', { status: 400 });
    }
  }

  return new Response('', { status: 200 });
}
