// app/users/page.tsx
'use client'; // Mark as a Client Component since we're using useState and useEffect

import { useState, useEffect } from 'react';

interface ApiResponse {
  message: string;
}

export default function UserAPIPage() {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/hello'); // Calls your Route Handler
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const result: ApiResponse = await response.json();
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []); // Empty dependency array means this runs once on mount

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>API Data Display</h1>
      <p>Message from API: <strong>{data?.message}</strong></p>
    </div>
  );
}