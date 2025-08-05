"use client";
import styles from "@/components/pages/Mypage/MyReview/myReview.module.css";
import MyReviewList from "@/components/pages/Mypage/MyReview/MyReviewList/MyReviewList";
import MyReviewWriteList from "@/components/pages/Mypage/MyReview/MyReviewWriteList/MyReviewWriteList";
// import { useRouter } from 'next/navigation';

export default function MyReview() {
  return (
    <>
      <div className={styles.review_wrapper}>
        {/* 리뷰 쓰기 */}
        <MyReviewWriteList />

        {/* 내가 작성한 리뷰 */}
        <MyReviewList />
      </div>
    </>
  );
}
