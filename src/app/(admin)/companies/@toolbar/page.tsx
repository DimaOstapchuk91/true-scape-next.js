import AddCompanyBtn from '@/app/components/AddCompanyBtn/AddCompanyBtn';
import SearchInput from '@/app/components/SearchInput/SerachInput';
import Toolbar from '@/app/components/Toolbar/Toolbar';

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <Toolbar action={<AddCompanyBtn />}>
      <SearchInput />
    </Toolbar>
  );
}
