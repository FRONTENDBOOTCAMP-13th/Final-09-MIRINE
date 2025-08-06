// "use client";
// import { useState } from "react";
import styles from "./detailSearchToggleButton.module.css";

interface DetailSearchToggleButtonProp {
  isActive: boolean;
  handleActive: () => void;
}
export default function DetailSearchToggleButton({ isActive, handleActive }: DetailSearchToggleButtonProp) {
  // const [isActive, setIsActive] = useState(false);
  return (
    <button onClick={handleActive} className={`${styles.detail_button} ${isActive && styles.active}`}>
      상세 검색
      {isActive ? (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 7.5L6 4.5L3 7.5" stroke="var(--primary-blue-300)" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ) : (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 4.5L6 7.5L9 4.5" stroke="#111111" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </button>
  );
}
