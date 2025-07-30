'use client'
import ReviewWriteBtn from '@/components/MypageAside/MyReview/Buttons/ReviewWriteBtn';
import styles from '@/components/MypageAside/MyReview/MyReviewWriteList/myReviewWriteList.module.css'
import Image from "next/image";

export default function MyReviewWriteList(){

  return(
    <div className={styles.review_wrapper}>
      <p className={styles.title}>리뷰 쓰기</p>

      {/* 리뷰쓰기 리스트 */}
      <div className={styles.list_group}>
        <Image src="/image/perfume1.svg" alt="향수 이미지" width={40} height={40} className={styles.item_img} />
        <div className={styles.item_info}>
          <p className={styles.date}>2025.07.30 16:38:01</p>
          <p className={styles.brand_name}>브랜드</p>
          <p className={styles.product_name}>향수이름</p>
        </div>

        {/* 리뷰쓰기 버튼 */}
        <div className={styles.btn_wrapper}>
          <ReviewWriteBtn />
        </div>
      </div>


    </div>
  )
}