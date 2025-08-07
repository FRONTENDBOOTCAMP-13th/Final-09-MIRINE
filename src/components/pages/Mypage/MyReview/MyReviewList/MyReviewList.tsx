"use client";

import styles from "@/components/pages/Mypage/MyReview/MyReviewList/myReviewList.module.css";
import MyReviewItem from "@/components/pages/Mypage/MyReview/MyReviewList/ReviewItem/ReviewItem";
import { getAccessToken, sortLatest } from "@/lib/clientFunction";
import { getMyReivews } from "@/lib/function";
import { ReviewItem } from "@/types/review";
import { useEffect, useState } from "react";

export default function MyReviewList() {
  const [reviewList, setReviewList] = useState<ReviewItem[] | null>(null);
  useEffect(() => {
    (async () => {
      const reviewData: ReviewItem[] = (await getMyReivews(getAccessToken())).item;
      reviewData.sort(sortLatest);
      console.log("reviewData", reviewData);
      setReviewList(reviewData);
    })();
  }, []);
  return (
    <>
      <p className={styles.title}>내가 작성한 리뷰</p>

      <ul className={styles.list}>
        {reviewList && reviewList.map((e) => <MyReviewItem key={e._id} data={e} />)}
        {/* <MyReviewItem />
        <MyReviewItem />
        <MyReviewItem /> */}
      </ul>
    </>
  );
}
