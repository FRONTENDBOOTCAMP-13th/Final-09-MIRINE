'use client'
import styles from '@/components/MypageAside/MyReview/Buttons/reviewWriteBtn.module.css'
import { useRouter } from 'next/navigation';

export default function ReviewWriteBtn(){
  const router = useRouter();

  const handleWriteClick = () => {
    router.push('/');
  }

  return(
    <div className={styles.write_btn_wrapper}>
      <button 
        type="button" 
        className={styles.write_btn}
        onClick={handleWriteClick}
        >
        리뷰쓰기
      </button>
    </div>
  )
}