'use client'
import styles from '@/components/MypageAside/ReviewWriteEdit/Button/Cancel/cancelBtn.module.css'

interface CancelButtonProps {
  onClick?: () => void; //나중에 수정
  disabled?: boolean;
}

export default function CancelButton({onClick, disabled = false}: CancelButtonProps){
  return(
      <button 
        type='button'
        className={styles.cancel_btn}
        onClick={onClick}
        disabled={disabled}
      >
        <p className={styles.btn_text}>취소하기</p>
      </button>
  )
}