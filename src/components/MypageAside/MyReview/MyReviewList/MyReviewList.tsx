'use client'
import DeleteBtn from '@/components/MypageAside/MyReview/Buttons/DeleteBtn';
import DetailBtn from '@/components/MypageAside/MyReview/Buttons/DetailBtn';
import EditBtn from '@/components/MypageAside/MyReview/Buttons/EditBtn';
import styles from '@/components/MypageAside/MyReview/MyReviewList/myReviewList.module.css'
import List from '@/components/Review/UserInfo/NameDateTime';
import Image from "next/image";
import Link from 'next/link';

export default function MyReviewList(){

  return(
    <div className={styles.review_wrapper}>
      <p className={styles.title}>내가 작성한 리뷰</p>

      <div className={styles.list_group}>
        <Link href="/" className={styles.review_list}>
        <div className={styles.user_info}>
          <div className={styles.user_info}>
            <p className={styles.name}>홍*동</p>
            <p className={styles.datetime}>2025.07.10 16:38:01</p>
        </div>
        </div>
        {/* 리뷰사진 */}
        <div className={styles.photo_group}>
          <Image src="/image/perfume1.svg" alt="리뷰 사진" width={52} height={52} className={styles.img} />
          <Image src="/image/perfume1.svg" alt="리뷰 사진" width={52} height={52} className={styles.img} />
          <Image src="/image/perfume1.svg" alt="리뷰 사진" width={52} height={52} className={styles.img} />
          <Image src="/image/perfume1.svg" alt="리뷰 사진" width={52} height={52} className={styles.img} />
          <Image src="/image/perfume1.svg" alt="리뷰 사진" width={52} height={52} className={styles.img} />
        </div>

        {/* 제품 정보 */}
        <div className={styles.item_info}>
          <p className={styles.brand_name}>브랜드</p>
          <p className={styles.product_name}>향수이름</p>
        </div>

        {/* 리뷰 텍스트 */}
        <div className={styles.text}>리뷰...더보기</div>

        {/* 리뷰버튼 */}
        <div className={styles.btn_wrapper}>
          <DetailBtn />
        </div>

        {/* 리뷰버튼 */}
        <div className={styles.btn_wrapper}>
          <EditBtn />
        </div>

        {/* 리뷰버튼 */}
        <div className={styles.btn_wrapper}>
          <DeleteBtn />
        </div>
      </Link>
      </div>


    </div>
  )
}