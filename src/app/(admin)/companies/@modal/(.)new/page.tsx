'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Modal from '@/app/components/Modal/Modal';
import CompanyForm from '@/app/components/CompanyForm/CompanyForm';

export interface PageProps {}

export default function Page({}: PageProps) {
  const router = useRouter();
  return (
    <Modal show={true} onClose={() => router.back()}>
      <CompanyForm onSubmit={console.log} />
    </Modal>
  );
}
