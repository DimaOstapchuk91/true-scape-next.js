'use client';

import Header from '@/app/components/Header/Header';
import { notFound } from 'next/navigation';
import React, { useEffect } from 'react';

export interface PageProps {
  params: { id: string };
}

export default function Page({ params }: PageProps) {
  const { id } = params;

  useEffect(() => {
    const id2 = Number.parseInt(id);
    if (Number.isNaN(id2)) {
      notFound();
    }
  }, [params.id]);

  return (
    <>
      <Header>Companies ({String(id)})</Header>
      <p>{new Date().toTimeString()}</p>
    </>
  );
}
