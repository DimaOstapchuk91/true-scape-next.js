import CompanyRow from '@/app/components/CompanyRow/CompanyRow';
import CompanyTable from '@/app/components/CompanyTable/CompanyTable';
import { Status } from '@/app/components/StatusLabel/StatusLabel';
import React from 'react';

export interface CompaniesPageProps {}

export default function Page({}: CompaniesPageProps) {
  return (
    <CompanyTable>
      <CompanyRow
        id={1}
        category={'Products'}
        company={'Costco'}
        status={Status.Pending}
        promotion={true}
        country={'USA'}
        joinedDate={'02.19.2023'}
      />
    </CompanyTable>
  );
}
