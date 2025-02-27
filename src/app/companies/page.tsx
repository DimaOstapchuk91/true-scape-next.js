import AddCompanyBtn from '@/app/components/AddCompanyBtn/AddCompanyBtn';
import CompanyRow from '@/app/components/CompanyRow/CompanyRow';
import CompanyTable from '@/app/components/CompanyTable/CompanyTable';
import Header from '@/app/components/Header/Header';
import SearchInput from '@/app/components/SearchInput/SerachInput';
import { Status } from '@/app/components/StatusLabel/StatusLabel';
import Toolbar from '@/app/components/Toolbar/Toolbar';
import React from 'react';

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <>
      <Header>Companies</Header>
      <Toolbar action={<AddCompanyBtn />}>
        <SearchInput />
      </Toolbar>
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
    </>
  );
}
