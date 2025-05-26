// 'use client';

import CompanyInfo from '@/app/components/CompanyInfo/CompanyInfo';
import CompanyPromotions from '@/app/components/CompanyPromotions/CompanyPromotions';
import Header from '@/app/components/Header/Header';
import { Company, getCompany, getPromotions } from '@/lib/api';
import getQueryClient from '@/lib/utils/getQueryClient';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { notFound } from 'next/navigation';
import React, { useEffect } from 'react';

export interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageProps) {
  const { id } = await params; // Важливо: у серверних компонентах з React 15, params є промісом, тому потрібно дочекатися його виконання
  // const { id } = await params;  в серверних компонентах з реакт 15 парамс є промісом https://nextjs.org/docs/messages/sync-dynamic-apis

  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['companies', id],
    queryFn: () => getCompany(id, { cache: 'no-store' }),
    staleTime: 10 * 1000,
  });

  await queryClient.prefetchQuery({
    queryKey: ['promotions', id],
    queryFn: () => getPromotions({ companyId: id }, { cache: 'no-store' }),
    staleTime: 10 * 1000,
  });

  const company = queryClient.getQueryData(['companies', id]) as Company;
  if (!company) {
    notFound();
  }

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <div className="py-6 px-10 grid grid-cols-12 gap-5">
        <div className="col-span-3">
          <CompanyInfo companyId={id} />
        </div>
        <div className="col-span-9">
          <CompanyPromotions companyId={id} />
        </div>
      </div>
    </HydrationBoundary>
  );
}
