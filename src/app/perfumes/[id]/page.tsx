import PerfumeDetailPage from "@/components/perfumes/DetailPage/DetailPage";
import { getProduct } from "@/lib/function";

export default async function PerfumeInfo({ params, searchParams }: { params: Promise<{ id: string }>; searchParams?: Promise<{ prev: string }> }) {
  const pageParams = await params;
  const queryString = await searchParams;
  console.log(Object.keys(queryString as object).includes("prev"));
  const res = await getProduct(+pageParams.id);
  const data = res.item;
  return (
    <>
      <PerfumeDetailPage id={pageParams.id} data={data} isMirine={Object.keys(queryString as object).includes("prev")} />
    </>
  );
}
