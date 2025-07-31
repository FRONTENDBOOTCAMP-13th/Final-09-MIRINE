'use client'
import styles from '@/components/MypageAside/ReviewWriteEdit/Button/Register/registerBtn.module.css'

interface RegisterButtonProps {
  onClick?: () => void; //나중에 수정
  disabled?: boolean;
}

export default function RegisterButton({onClick, disabled = false}: RegisterButtonProps){
  return(
      <button 
        type='button'
        className={styles.register_btn}
        onClick={onClick}
        disabled={disabled}
      >
        <p className={styles.btn_text}>등록하기</p>
      </button>
  )
}