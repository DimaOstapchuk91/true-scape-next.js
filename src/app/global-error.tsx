'use client';

import Button from './components/buttons/Button';

export interface GlobalErrorProps {
  error: Error;
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  return (
    <html>
      <body>
        <div>
          <p>Something globally went wrong</p>
          <Button onClick={() => reset()}>Try Again</Button>
        </div>
      </body>
    </html>
  );
}
