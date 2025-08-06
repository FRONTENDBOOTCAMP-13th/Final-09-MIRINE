"use client";
import { SmallButton } from "@/components/ui/Button/SmallButton";
import { useRouter } from "next/navigation";

export default function ReviewWriteBtn() {
  const router = useRouter();

  const handleWriteClick = () => {
    router.push("/reviews/write");
  };

  return (
    <SmallButton ButtonColor="blue" onClick={handleWriteClick}>
      리뷰쓰기
    </SmallButton>
  );
}
