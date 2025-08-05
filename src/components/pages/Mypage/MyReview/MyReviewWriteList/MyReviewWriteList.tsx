"use client";

import ReviewWriteBtn from "@/components/pages/Mypage/MyReview/Buttons/ReviewWriteBtn";
import styles from "@/components/pages/Mypage/MyReview/MyReviewWriteList/myReviewWriteList.module.css";
import Image from "next/image";

export default function MyReviewWriteList() {
  return (
    <div className={styles.wrap}>
      <p className={styles.title}>리뷰 쓰기</p>

      {/* 리뷰쓰기 리스트 */}
      <ul className={styles.list}>
        <li className={styles.list_item}>
          <Image src="/image/perfume-test.webp" alt="향수 이미지" width={40} height={40} className={styles.item_img} />
          <div className={styles.item_info}>
            <p className={styles.date}>2025.07.30 16:38:01</p>
            <p className={styles.brand_name}>브랜드</p>
            <p className={styles.product_name}>향수이름</p>
          </div>

          {/* 리뷰쓰기 버튼 */}
          <ReviewWriteBtn />
        </li>
      </ul>
    </div>
  );
}
