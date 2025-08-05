import { SmallButton } from "@/components/ui/Button/SmallButton";
// import { useRouter } from "next/navigation";

export default function EditBtn() {
  // const router = useRouter();

  return (
    <SmallButton
      ButtonColor="black"
      // onClick={() => router.push(`/reviews/edit/${reviewId}`)}
    >
      리뷰 수정
    </SmallButton>
  );
}
