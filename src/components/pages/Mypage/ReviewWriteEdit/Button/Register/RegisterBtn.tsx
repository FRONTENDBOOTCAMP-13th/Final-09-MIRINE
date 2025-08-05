"use client";
import styles from "@/components/pages/Mypage/ReviewWriteEdit/Button/Register/registerBtn.module.css";

interface RegisterButtonProps {
  onClickRegister: () => void;
  disabled?: boolean;
}

export default function RegisterButton({ onClickRegister, disabled = false }: RegisterButtonProps) {
  return (
    <button type="button" className={styles.register_btn} onClick={onClickRegister} disabled={disabled}>
      <p className={styles.btn_text}>등록하기</p>
    </button>
  );
}
