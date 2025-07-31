import { getAllReivews } from "@/lib/function";
import ReviewListEx from "./ReviewListEx";
import Link from "next/link";

export default async function ReviewTest() {
  const crtURL = "/devtest/actiontest/reviewTest";
  const data = (await getAllReivews()).item;
  return (
    <>
      <div>
        <Link href={`${crtURL}/new`}></Link>
      </div>
      <ReviewListEx data={data} />
    </>
  );
}
