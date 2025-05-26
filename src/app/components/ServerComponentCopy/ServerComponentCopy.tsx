import { headers } from 'next/headers';

export interface ServerComponentCopyProps {
  children?: React.ReactNode;
}

export default function ServerComponentCopy({
  children,
}: ServerComponentCopyProps) {
  console.log(headers());
  console.log('Server Component Copy 2');
  return (
    <div>
      <span>Server Component Copy</span>
      {children}
    </div>
  );
}
