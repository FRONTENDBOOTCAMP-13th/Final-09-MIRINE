import styles from '@/components/MypageAside/MyReview/Buttons/detailBtn.module.css'
import Link from 'next/link'

export default function DetailBtn(){

  return(
    <div className={styles.detail_btn_wrapper}>
      <Link href="/" className={styles.review_link}> 
      <button 
        type="button" 
        className={styles.detail_btn}
        // onClick={handleWriteClick}
        >
        리뷰 상세보기
      </button>
      </Link>
    </div>
  )
}