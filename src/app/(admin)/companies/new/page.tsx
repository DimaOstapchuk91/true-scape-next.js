'use client';

import CompanyForm from '@/app/components/CompanyForm/CompanyForm';
import React from 'react';

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <div className="py-6 px-10">
      <CompanyForm onSubmit={console.log} />
    </div>
  );
}
