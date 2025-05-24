// 'use client';

import Header from '@/app/components/Header/Header';
import { notFound } from 'next/navigation';
import React, { useEffect } from 'react';

export interface PageProps {
  params: Promise<{ id: string }>;
}

export default function Page({ params }: PageProps) {
  const { id } = React.use(params); // в клієнтських компонентах
  // const { id } = await params;  в серверних компонентах з реакт 15 парамс є промісом https://nextjs.org/docs/messages/sync-dynamic-apis

  return (
    <>
      <div className="py-6 px-10">
        <p>{`Information about company (${id})`}</p>
      </div>
    </>
  );
}
