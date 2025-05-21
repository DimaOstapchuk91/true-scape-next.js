import React from 'react';
import { getSummaryPromotions } from '@/lib/api';
import DashboardCard from '@/app/components/DashBoardCard/DashBoardCard';
import SummaryTable from '@/app/components/SummaryTable/SummaryTable';
import SummaryTableCell from '@/app/components/SummaryTableCell/SummaryTableCell';
import SummaryTableHeader from '@/app/components/SummaryTableHeader/SummaryTableHeader';

export interface PageProps {}

export default async function Page({}: PageProps) {
  const data = await getSummaryPromotions();

  return (
    <DashboardCard label="Promotions">
      <SummaryTable
        headers={
          <>
            <SummaryTableHeader>Company</SummaryTableHeader>
            <SummaryTableHeader>Name</SummaryTableHeader>
            <SummaryTableHeader align="center">%</SummaryTableHeader>
          </>
        }
      >
        {data.map(({ promotionId, promotionName, companyTitle, discount }) => (
          <tr key={promotionId}>
            <SummaryTableCell>{companyTitle}</SummaryTableCell>
            <SummaryTableCell>{promotionName}</SummaryTableCell>
            <SummaryTableCell align="center">{`-${discount}%`}</SummaryTableCell>
          </tr>
        ))}
      </SummaryTable>
    </DashboardCard>
  );
}
