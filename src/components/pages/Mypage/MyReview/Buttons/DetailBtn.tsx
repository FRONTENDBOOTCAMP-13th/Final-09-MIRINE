"use client";

import { SmallButton } from "@/components/ui/Button/SmallButton";
import { useRouter } from "next/navigation";

export default function DetailBtn({ reviewID }: { reviewID: number }) {
  const router = useRouter();

  const handleDetailClick = () => {
    router.push("/reviews/" + reviewID);
  };

  return (
    <SmallButton ButtonColor="black" onClick={handleDetailClick}>
      리뷰 상세보기
    </SmallButton>
  );
}
