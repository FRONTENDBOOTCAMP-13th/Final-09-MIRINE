"use client";
import { SmallButton } from "@/components/ui/Button/SmallButton";
import { useRouter } from "next/navigation";

export default function ReviewWriteBtn({ orderID }: { orderID: number }) {
  const router = useRouter();

  const handleWriteClick = () => {
    router.push(`/reviews/write/${orderID}`);
  };

  return (
    <SmallButton ButtonColor="blue" onClick={handleWriteClick}>
      리뷰쓰기
    </SmallButton>
  );
}
