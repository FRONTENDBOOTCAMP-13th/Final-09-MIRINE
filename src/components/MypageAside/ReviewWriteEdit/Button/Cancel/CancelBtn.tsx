'use client'
import styles from '@/components/MypageAside/ReviewWriteEdit/Button/Cancel/cancelBtn.module.css'
import { useRouter } from 'next/navigation';

interface CancelButtonProps {
  onClickCancel?: () => void; 
  disabled?: boolean;
}

export default function CancelButton({onClickCancel, disabled = false}: CancelButtonProps){
  const router = useRouter();

  const handleClick = () => {
    if (onClickCancel) {
      onClickCancel();
    } else {
      router.push('/myreviews'); 
    }
  }
  
  return(
      <button 
        type='button'
        className={styles.cancel_btn}
        onClick={handleClick}
        disabled={disabled}
      >
        <p className={styles.btn_text}>취소하기</p>
      </button>
  )
}