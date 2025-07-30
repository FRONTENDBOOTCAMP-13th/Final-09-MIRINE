import styles from '@/components/MypageAside/MyReview/Buttons/detailBtn.module.css'

export default function DetailBtn(){

  return(
    <div className={styles.detail_btn_wrapper}>
      <button 
        type="button" 
        className={styles.detail_btn}
        // onClick={handleWriteClick}
        >
        리뷰 상세보기
      </button>
    </div>
  )
}