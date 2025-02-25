'use client';

import ServerComponentCopy from '../ServerComponentCopy/ServerComponentCopy';

export interface ServerComponentProps {
  children?: React.ReactNode;
}

export default function ClientComponent({ children }: ServerComponentProps) {
  console.log('Client Component');
  return (
    <div>
      <span>Client Component</span>
      {children}
    </div>
  );
}
