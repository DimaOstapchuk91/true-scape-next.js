'use client';

import Button from '@/app/components/buttons/Button';
import { ErrorComponentProps } from './(admin)/dashboard/error';

export default function ErrorComponent({ error, reset }: ErrorComponentProps) {
  return (
    <div>
      <p>{`Something went wrong. ${error.message}`}</p>
      <Button onClick={() => reset()}>Try Again</Button>
    </div>
  );
}
