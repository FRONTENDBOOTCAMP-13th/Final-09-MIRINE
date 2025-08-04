import PerfumeDetailPage from "@/components/perfumes/DetailPage/DetailPage";
import { getProduct } from "@/lib/function";

export default async function PerfumeInfo({ params }: { params: Promise<{ id: string }> }) {
  const pageParams = await params;
  const res = await getProduct(+pageParams.id);
  const data = res.item;
  return (
    <>
      <PerfumeDetailPage id={pageParams.id} data={data} />
    </>
  );
}
