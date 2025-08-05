"use client";
import MyReviewList from "@/components/pages/Mypage/MyReview/MyReviewList/MyReviewList";
import MyReviewWriteList from "@/components/pages/Mypage/MyReview/MyReviewWriteList/MyReviewWriteList";

export default function MyReview() {
  return (
    <>
      {/* 리뷰 쓰기 */}
      <MyReviewWriteList />

      {/* 내가 작성한 리뷰 */}
      <MyReviewList />
    </>
  );
}
