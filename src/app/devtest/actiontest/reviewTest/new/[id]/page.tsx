import NewReviewContainerEx from "./NewReviewContainerEx";

export default async function NewReviewEx({ params }: { params: Promise<{ id: string }> }) {
  const pageParams = await params;
  return <NewReviewContainerEx id={pageParams.id} />;
}
