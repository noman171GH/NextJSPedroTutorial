https://www.youtube.com/watch?v=6jQdZcYY8OY

Frontend Component (Friends)

"use client";

import { useState } from "react";

// This function makes a POST request to the API
async function makePostRequest() {
  const res = await fetch(`/api/hello`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: "Jack" }),
  });

  const data = await res.json();
  return { data };
}

export default function Friends() {
  const [message, setMessage] = useState("");
  
  // This function runs when button is clicked
  const onClick = async () => {
    const { data } = await makePostRequest();
    setMessage(data.message);
  };
  
  return (
    <h1>
      {" "}
      Heyy Friends, {message} <button onClick={onClick}> Click Here</button>
    </h1>
  );
}

🚀 Backend API Route (/api/hello)
typescript

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

🔍 What Happens Step by Step:
1. Initial State

    The page loads showing: "Heyy Friends, "

    The message state is empty ""

2. User Action

    User clicks the "Click Here" button

    The onClick function is triggered

3. API Call Process
typescript

// Step 1: makePostRequest() is called
const res = await fetch(`/api/hello`, {
  method: "POST",                    // POST request
  headers: {
    "Content-Type": "application/json", // Sending JSON data
  },
  body: JSON.stringify({ name: "Jack" }), // Sending {name: "Jack"}
});

// Step 2: API receives the request
const data = await req.json();       // API gets {name: "Jack"}
const { name } = data;               // name = "Jack"

// Step 3: API responds
return NextResponse.json({
  message: `hello ${name}, this was sent from the api`,
  // becomes: "hello Jack, this was sent from the api"
});

// Step 4: Frontend receives response
const data = await res.json();       // data = {message: "hello Jack, ..."}

4. UI Update

    setMessage(data.message) updates state to "hello Jack, this was sent from the api"

    Component re-renders showing: "Heyy Friends, hello Jack, this was sent from the api"

📊 Visual Flow:
text

User Clicks Button 
    ↓
Frontend sends POST to /api/hello with {name: "Jack"}
    ↓
API receives {name: "Jack"} 
    ↓
API processes and returns {message: "hello Jack, ..."}
    ↓
Frontend receives response and updates state
    ↓
UI shows: "Heyy Friends, hello Jack, this was sent from the api"

🛠️ Key Concepts Explained:
Frontend:

    "use client" - Makes this a client-side React component

    useState - Manages component state

    fetch() - Browser API to make HTTP requests

    JSON.stringify() - Converts JavaScript object to JSON string

Backend:

    NextResponse.json() - Helper to send JSON responses

    req.json() - Parses the incoming request body

    Named exports (GET, POST) - Handle different HTTP methods

🎯 What You'll See:

Before Click:
text

Heyy Friends, [Click Here]

After Click:
text

Heyy Friends, hello Jack, this was sent from the api [Click Here]

🔄 Try This Experiment:

Modify the frontend to send a different name:
typescript

// Change this line in makePostRequest():
body: JSON.stringify({ name: "Sarah" }),

Now when you click the button, it will show:
text

Heyy Friends, hello Sarah, this was sent from the api

This demonstrates how data flows from frontend → backend → frontend in a complete cycle!






































This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
