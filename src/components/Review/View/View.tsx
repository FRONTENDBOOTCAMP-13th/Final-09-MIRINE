"use client";
// import Link from "next/link";
import { ReviewItem } from "@/types/review";
import styles from "./view.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ratingToStar } from "@/lib/clientFunction";

export default function View({ data }: { data: ReviewItem }) {
  const [reviewData, setReviewData] = useState<ReviewItem | null>(data);
  const [showingImg, setShowingImg] = useState(data.extra.images[0]);
  const [showingImgIdx, setShowingImgIdx] = useState(0);
  useEffect(() => {
    console.log(data);
    setReviewData(data);
  }, [data]);
  return (
    <div className={styles.view}>
      {/* 프로필 이미지 & 리뷰 작성 정보 */}
      <div className={styles.user_section}>
        <Image src={showingImg} alt="리뷰 이미지" width={360} height={406} className={styles.image} />
        {/* 점 */}
        <div className={styles.indicators}>
          {reviewData &&
            reviewData?.extra.images.map((e, i) => (
              <button
                onClick={() => {
                  setShowingImgIdx(i);
                  setShowingImg(reviewData.extra.images[i]);
                }}
                key={e}
                type="button"
                className={showingImgIdx === i ? styles.indicator_active : styles.indicator}
              ></button>
            ))}
        </div>
        {/* 리뷰 작성 정보 */}
        <div className={styles.review_info}>
          <div className={styles.user_info}>
            <p className={styles.name}>{reviewData?.user.name}</p>
            <p className={styles.datetime}>{reviewData?.createdAt}</p>
          </div>
          {/* 별점 */}
          <div className={styles.star}>{ratingToStar(reviewData?.rating || 0)}</div>
        </div>

        {/* 제품정보 */}
        <div className={styles.product_info}>
          <div className={styles.brand}>{reviewData?.extra.brand}</div>
          <div className={styles.product_name}>{reviewData?.product.name}</div>
        </div>
        {/* 후기 텍스트 */}
        <div className={styles.review_text}>
          <p>{reviewData?.content}</p>
        </div>
      </div>
    </div>
  );
}
