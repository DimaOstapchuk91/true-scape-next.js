import ErrorBoundary from '@/app/components/ErrorBoundary/ErrorBoundary';
import MagicBtn from '@/app/components/MagicBtn/MagicBtn';

import React from 'react';

export interface PagePropsTest {}

export default function Page({}: PagePropsTest) {
  return (
    <main>
      <h1>Dashboard Page</h1>
      <ErrorBoundary>
        <MagicBtn />
      </ErrorBoundary>
    </main>
  );
}
