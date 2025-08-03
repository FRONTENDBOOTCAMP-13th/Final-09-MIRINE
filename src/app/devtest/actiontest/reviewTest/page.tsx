import { getAllOrders, getAllReivews } from "@/lib/function";
import ReviewListEx from "./ReviewListEx";
import OrderListEx from "./OrderListEx";
import ReviewEx from "./ReviewEx";
// import Link from "next/link";

export default async function ReviewTest() {
  // const crtURL = "/devtest/actiontest/reviewTest";
  const reviewData = (await getAllReivews()).item;
  console.log(reviewData);
  return (
    <>
      <div>주문내역</div>
      {/* <div>
        <Link href={`${crtURL}/new`}></Link>
      </div> */}
      {/* <ReviewListEx data={reviewData} /> */}
      <OrderListEx />
      <div>리뷰</div>
      <ReviewEx />
    </>
  );
}
