import { SmallButton } from "@/components/ui/Button/SmallButton";
import { deleteReview } from "@/lib/action";
import { getAccessToken } from "@/lib/clientFunction";

export default function DeleteBtn({ reviewID }: { reviewID: number }) {
  const token = getAccessToken();
  return (
    <SmallButton
      ButtonColor="orange"
      onClick={() => {
        deleteReview(reviewID, token);
      }}
    >
      리뷰 삭제
    </SmallButton>
  );
}
