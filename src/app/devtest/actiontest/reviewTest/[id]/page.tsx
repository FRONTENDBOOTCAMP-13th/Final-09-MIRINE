import { getReivew } from "@/lib/function";
import ReviewInfoEx from "./ReviewInfoEx";

export default async function ReviewInfo({ params }: { params: Promise<{ id: string }> }) {
  const pageParams = await params;
  const data = (await getReivew(+pageParams.id)).item[0];
  return <>{data && <ReviewInfoEx id={+pageParams.id} data={data} />}</>;
}
