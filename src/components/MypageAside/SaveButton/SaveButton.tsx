'use client'
import styles from '@/components/MypageAside/SaveButton/saveButton.module.css'

interface SaveButtonProps {
  onClickSave: () => void; 
  disabled?: boolean;
}

export default function SaveButton({onClickSave, disabled = false}: SaveButtonProps){
  return(
    <div className={styles.btn}>
      <button 
        type='button'
        className={`${styles.save_btn} ${disabled ? styles.disabled : ''}`}
        onClick={onClickSave}
        disabled={disabled}
      >
        <p className={styles.btn_text}>저장</p>
      </button>
    </div>
  )
}