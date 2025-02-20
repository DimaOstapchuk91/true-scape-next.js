import React from 'react';

export interface ActiveLabelProps {
  children: React.ReactNode;
}

const ActiveLabel = ({ children }: ActiveLabelProps) => {
  return <span className="text-4xl text-green-500">{children}</span>;
};
export default ActiveLabel;
