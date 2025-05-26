import { getSummarySales } from '@/lib/api';
import DashboardCard from '@/app/components/DashBoardCard/DashBoardCard';
import SummaryTable from '@/app/components/SummaryTable/SummaryTable';
import SummaryTableCell from '@/app/components/SummaryTableCell/SummaryTableCell';
import SummaryTableHeader from '@/app/components/SummaryTableHeader/SummaryTableHeader';
import MagicBtn from '@/app/components/MagicBtn/MagicBtn';

export interface PageProps {}

export default async function Page({}: PageProps) {
  const data = await getSummarySales();

  return (
    <DashboardCard label="Sales details">
      <SummaryTable
        headers={
          <>
            <SummaryTableHeader>Company</SummaryTableHeader>
            <SummaryTableHeader align="center">Sold</SummaryTableHeader>
            <SummaryTableHeader align="center">Income</SummaryTableHeader>
          </>
        }
      >
        {data.map(({ companyId, companyTitle, sold, income }) => (
          <tr key={companyId}>
            <SummaryTableCell>{companyTitle}</SummaryTableCell>
            <SummaryTableCell align="center">{sold}</SummaryTableCell>
            <SummaryTableCell align="center">{`$${income}`}</SummaryTableCell>
          </tr>
        ))}
      </SummaryTable>
    </DashboardCard>
  );
}
