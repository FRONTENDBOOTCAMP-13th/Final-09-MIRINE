import EditReviewContainerEx from "./EditReviewContainerEx";

export default async function ReviewEdit({ params }: { params: Promise<{ id: string }> }) {
  const pageParams = await params;
  console.log("pageParams", pageParams);
  return <EditReviewContainerEx id={pageParams.id} />;
}
