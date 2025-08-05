"use client";

import styles from "@/components/pages/Mypage/MyReview/MyReviewList/myReviewList.module.css";
import MyReviewItem from "@/components/pages/Mypage/MyReview/MyReviewList/ReviewItem/ReviewItem";

export default function MyReviewList() {
  return (
    <>
      <p className={styles.title}>내가 작성한 리뷰</p>

      <ul className={styles.list}>
        <MyReviewItem />
        <MyReviewItem />
        <MyReviewItem />
      </ul>
    </>
  );
}
