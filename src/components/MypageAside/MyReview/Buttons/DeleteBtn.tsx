import styles from '@/components/MypageAside/MyReview/Buttons/deleteBtn.module.css'

export default function DeleteBtn(){

  return(
    <div className={styles.delete_btn_wrapper}>
      <button 
        type="button" 
        className={styles.delete_btn}
        // onClick={handleWriteClick}
        >
        리뷰삭제
      </button>
    </div>
  )
}