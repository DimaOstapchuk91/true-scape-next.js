import { getPromotions } from '@/lib/api';
import DashboardCard from '@/app/components/DashBoardCard/DashBoardCard';
import SummaryTable from '@/app/components/SummaryTable/SummaryTable';
import SummaryTableCell from '@/app/components/SummaryTableCell/SummaryTableCell';
import SummaryTableHeader from '@/app/components/SummaryTableHeader/SummaryTableHeader';

export interface PageProps {}

export default async function Page({}: PageProps) {
  const data = await getPromotions();

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
        {data.map(({ id, title, companyTitle, discount }) => (
          <tr key={id}>
            <SummaryTableCell>{companyTitle}</SummaryTableCell>
            <SummaryTableCell>{title}</SummaryTableCell>
            <SummaryTableCell align="center">{`-${discount}%`}</SummaryTableCell>
          </tr>
        ))}
      </SummaryTable>
    </DashboardCard>
  );
}
