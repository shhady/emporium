import { Webhook } from 'svix';
import { headers } from 'next/headers';
import { WebhookEvent } from '@clerk/nextjs/server';
import User from '@/models/user';
import { connectToDB } from "@/utils/database";
import { createUser } from '../../add-user/route';
import { clerkClient } from '@clerk/nextjs';
import { NextResponse } from 'next/server';
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

  const { id } = evt.data;
    const type = evt.type; 
  console.log(`Webhook with an ID of ${id} and type of ${type}`);
  console.log('Webhook body:', body);

  if (type === 'user.created') {
    const { id, email_addresses, image_url, first_name, last_name, username } = evt.data;

    const user = {
      clerkId: id,
      email: email_addresses[0].email_address,
      username: username ? username : email_addresses[0].email_address.split("@")[0],
      firstName: first_name,
      lastName: last_name,
      photo: image_url,
      role: 'user'
    };

    console.log('Creating user:', user);
    try {
      const newUser = await createUser(user);
      if (newUser) {
        await clerkClient.users.updateUserMetadata(id, {
          publicMetadata: {
            userId: newUser._id,
          }
        });
        console.log('User created and metadata updated:', newUser);
      }
    } catch (error) {
      console.error('Error creating user or updating metadata:', error);
      return new Response('Error occurred', { status: 500 });
    }
    return NextResponse.json({message: 'new user created successfully', user: newUser})
  } else {
    console.log('Unhandled webhook type:', type);
  }

  return new Response('', { status: 200 });
}
