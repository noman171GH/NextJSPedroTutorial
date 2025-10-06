import { NextResponse } from "next/server";

// Handles GET requests to /api/hello
export async function GET() {
  return NextResponse.json({ message: "hello from api" });
}

// Handles POST requests to /api/hello
export async function POST(req: Request) {
  const data = await req.json();
  const { name } = data;

  return NextResponse.json({
    message: `hello ${name}, this was sent from the api`,
  });
}