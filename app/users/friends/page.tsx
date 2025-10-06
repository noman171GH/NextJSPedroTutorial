"use client";

import { useState } from "react";

// This function makes a POST request to the API
async function makePostRequest() {
  const res = await fetch(`/api/hello`, {
    //telling route of API
    method: "POST", //method is post
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: "John" }), // sending data to POST function at app/api/hello/route.ts.
  });

  const data = await res.json();
  return { data };
}

export default function Friends() {
  const [message, setMessage] = useState("");

  // This function runs when button is clicked
  const onClick = async () => {
    const { data } = await makePostRequest();
    setMessage(data.message); // here message is coming from API which is stored in data.
  };

  return (
    <h1>
      {" "}
      Heyy Friends, {message} <button onClick={onClick}> Click Here</button>
    </h1>
  );
}
