'use client'
import styles from '@/components/MypageAside/MyReview/myReview.module.css'
import MyReviewWriteList from '@/components/MypageAside/MyReview/MyReviewWriteList/MyReviewWriteList'
// import { useRouter } from 'next/navigation';

export default function MyReview(){
  return(
    <>
      <div className={styles.review_wrapper}>
        <MyReviewWriteList />
      </div>
    </>
  )
}