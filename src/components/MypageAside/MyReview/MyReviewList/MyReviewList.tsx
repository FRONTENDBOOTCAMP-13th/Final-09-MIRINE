'use client'
import DeleteBtn from '@/components/MypageAside/MyReview/Buttons/DeleteBtn';
import DetailBtn from '@/components/MypageAside/MyReview/Buttons/DetailBtn';
import EditBtn from '@/components/MypageAside/MyReview/Buttons/EditBtn';
import styles from '@/components/MypageAside/MyReview/MyReviewList/myReviewList.module.css'
import MyReviewItem from '@/components/MypageAside/MyReview/MyReviewList/ReviewItem/ReviewItem';
import Image from "next/image";
import Link from 'next/link';

export default function MyReviewList(){

  return(
    <div className={styles.review_wrapper}>
      <p className={styles.title}>내가 작성한 리뷰</p>

      <div className={styles.list_wrapper}>
        {/* <Link href="/" className={styles.review_link}> */}
          <MyReviewItem />

          <div className={styles.btn_wrapper}>
            {/* 리뷰 상세보기 버튼 */}
            <div className={styles.detail_btn}>
              <DetailBtn />
            </div>

            {/* 수정버튼 */}
            <div className={styles.edit_btn}>
              <EditBtn />
            </div>

            {/* 삭제버튼 */}
            <div className={styles.delete_btn}>
              <DeleteBtn />
            </div>
          </div>
        {/* </Link> */}
      </div>


    </div>
  )
}