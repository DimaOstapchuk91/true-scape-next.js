'use client';

import CompanyForm from '@/app/components/CompanyForm/CompanyForm';

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <div className="py-6 px-10">
      <CompanyForm />
    </div>
  );
}
