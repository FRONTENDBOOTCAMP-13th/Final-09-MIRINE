// 'use client'
import styles from '@/components/MypageAside/MyReview/MyReviewList/ReviewItem/reviewItem.module.css'
import Image from "next/image";

export default function MyReviewItem(){
  return(
      <div className={styles.info_group}>
        <div className={styles.info}>
          <p className={styles.datetime}>2025.07.10 16:38:01</p>
          <p className={styles.star}>별점</p>
        </div>

        {/* 리뷰사진 */}
        <div className={styles.photo_group}>
          <Image src="/image/perfume1.svg" alt="리뷰 사진" width={52} height={52} className={styles.img} />
          <Image src="/image/perfume1.svg" alt="리뷰 사진" width={52} height={52} className={styles.img} />
          <Image src="/image/perfume1.svg" alt="리뷰 사진" width={52} height={52} className={styles.img} />
        </div>

        {/* 제품 정보 */}
        <div className={styles.item_group}>
          <div className={styles.item_info}>
            <p className={styles.brand_name}>브랜드</p>
            <p className={styles.product_name}>향수이름</p>
          </div>
          {/* 리뷰 텍스트 */}
          <div className={styles.text}>리뷰...더보기</div>
        </div>
      </div>
);
}