import AddPromotionButton from '@/app/components/AddPromotionButton/AddPromotionButton';
import SearchInput from '@/app/components/SearchInput/SerachInput';
import Toolbar from '@/app/components/Toolbar/Toolbar';

export interface PageProps {
  params: { id: string };
}

export default function Page({ params }: PageProps) {
  return (
    <Toolbar action={<AddPromotionButton companyId={params.id} />}>
      <SearchInput />
    </Toolbar>
  );
}
