import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import FormSubmission from '@/models/FormSubmission';

export async function POST(request) {
  try {
    await dbConnect();
    const data = await request.json();
    
    const submission = await FormSubmission.create(data);
    
    return NextResponse.json(
      { success: true, data: submission },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    );
  }
}

export async function GET(request) {
  try {
    await dbConnect();
    
    // Check for auth token
    const token = request.headers.get('authorization')?.split(' ')[1];
    if (!token) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }
    
    // Verify token (you'll need to implement this)
    const isValidToken = await verifyToken(token);
    if (!isValidToken) {
      return NextResponse.json(
        { success: false, error: 'Invalid token' },
        { status: 401 }
      );
    }
    
    const submissions = await FormSubmission.find().sort({ createdAt: -1 });
    
    return NextResponse.json(
      { success: true, data: submissions },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    );
  }
}

async function verifyToken(token) {
  // In a real app, verify JWT token here
  // This is a simplified example
  return token === process.env.ADMIN_TOKEN;
}
