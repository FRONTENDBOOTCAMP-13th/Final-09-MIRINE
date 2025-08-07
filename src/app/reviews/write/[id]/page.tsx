import ReviewWriteEdit from "@/components/pages/Mypage/ReviewWriteEdit/ReviewWriteEdit";

export default async function ReviewWritePage({ params }: { params: Promise<{ id: string }> }) {
  const pageParams = await params;
  return <ReviewWriteEdit mode="write" pageID={pageParams.id} />;
}
