'use client'
import styles from '@/components/MypageAside/MyReview/Buttons/detailBtn.module.css'
// import Link from 'next/link'
import { useRouter } from 'next/navigation';

export default function DetailBtn(){
  const router = useRouter();
  
  const handleDetailClick = () => {
      router.push('/');
  }

  return(
    <div className={styles.detail_btn_wrapper}>
      {/* <Link href="/" className={styles.review_link}>  */}
      <button 
        type="button" 
        className={styles.detail_btn}
        onClick={handleDetailClick}
        >
        리뷰 상세보기
      </button>
      {/* </Link> */}
    </div>
  )
}