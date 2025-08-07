import View from "@/components/Review/View/View";
import { getReivew } from "@/lib/function";

export default async function ReviewInfo({ params }: { params: Promise<{ id: string }> }) {
  const pageParams = await params;
  const data = (await getReivew(+pageParams.id)).item[0];
  return (
    <>
      <View data={data} />
    </>
  );
}
