'use client';

import Button from '../buttons/Button';
import { useRouter } from 'next/navigation';

export default function AddCompanyBtn() {
  const router = useRouter();
  return (
    <Button onClick={() => router.push('/companies/new')}>Add Company</Button>
  );
}
