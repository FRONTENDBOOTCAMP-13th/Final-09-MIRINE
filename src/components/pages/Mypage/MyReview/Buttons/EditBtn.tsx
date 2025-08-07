import { SmallButton } from "@/components/ui/Button/SmallButton";
import { useRouter } from "next/navigation";

export default function EditBtn({ reviewID }: { reviewID: number }) {
  const router = useRouter();

  return (
    <SmallButton ButtonColor="black" onClick={() => router.push(`/reviews/edit/${reviewID}`)}>
      리뷰 수정
    </SmallButton>
  );
}
