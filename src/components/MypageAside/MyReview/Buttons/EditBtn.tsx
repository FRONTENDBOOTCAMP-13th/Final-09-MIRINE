import styles from '@/components/MypageAside/MyReview/Buttons/editBtn.module.css'

export default function EditBtn(){

  return(
    <div className={styles.edit_btn_wrapper}>
      <button 
        type="button" 
        className={styles.edit_btn}
        // onClick={handleWriteClick}
        >
        리뷰 상세보기
      </button>
    </div>
  )
}