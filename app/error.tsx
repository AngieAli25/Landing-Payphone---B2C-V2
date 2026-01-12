'use client'; // Error components must be Client Components

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h2>Qualcosa è andato storto!</h2>
      <p>{error.message}</p>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          background: 'black',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Riprova
      </button>
    </div>
  );
}
