'use client';

import React, { useState } from 'react';
import Button from '../buttons/Button';
import dynamic from 'next/dynamic';

const CompanyFormModal = dynamic(
  () => import('../CompanyFormModal/CompanyFormModal')
);

export default function AddCompanyBtn() {
  const [show, setShow] = useState(false);
  return (
    <>
      <Button onClick={() => setShow(true)}>Add Company</Button>
      <CompanyFormModal
        onSubmit={console.log}
        show={show}
        onClose={() => setShow(false)}
      />
    </>
  );
}
