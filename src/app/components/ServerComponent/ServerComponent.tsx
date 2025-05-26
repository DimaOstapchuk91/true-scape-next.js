export interface ServerComponentProps {
  children?: React.ReactNode;
}

export default function ServerComponent({ children }: ServerComponentProps) {
  console.log('Server Component 1');
  return (
    <div>
      <span>Server Component</span>
      {children}
    </div>
  );
}
