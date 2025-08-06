"use client";
import styles from "@/components/pages/Mypage/ReviewWriteEdit/Button/Register/registerBtn.module.css";

interface RegisterButtonProps {
  onClickRegister: () => void;
  buttonText?: string;
  disabled?: boolean;
}

export default function RegisterButton({ onClickRegister, buttonText = "등록하기", disabled = false }: RegisterButtonProps) {
  return (
    <button type="button" className={styles.register_btn} onClick={onClickRegister} disabled={disabled}>
      <p className={styles.btn_text}>{buttonText}</p>
    </button>
  );
}
