'use client'
import styles from '@/components/MypageAside/SaveButton/saveButton.module.css'

interface SaveButtonProps {
  onClick?: () => void; //나중에 수정
  disabled?: boolean;
}

export default function SaveButton({onClick, disabled = false}: SaveButtonProps){
  return(
    <div className={styles.btn}>
      <button 
        type='button'
        className={styles.save_btn}
        onClick={onClick}
        disabled={disabled}
      >
        저장
      </button>
    </div>
  )
}