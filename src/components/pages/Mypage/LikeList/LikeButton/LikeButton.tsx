"use client";
import styles from "@/components/Mypage/LikeList/LikeButton/likeButton.module.css";
import { useState, MouseEvent } from "react";

export default function LikeButton() {
  const [isActive, setIsActive] = useState(false);

  const handleLikeClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsActive(!isActive);
  };

  return (
    <div>
      <button className={styles.like_btn} aria-label="찜하기" type="button" onClick={handleLikeClick}>
        {isActive ? (
          <svg width={20} height={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.5 3.5C19.3045 3.5 21.5 5.68674 21.5 8.5C21.5 10.2206 20.7289 11.8259 19.2695 13.6113C17.8047 15.4035 15.699 17.3154 13.1143 19.6592L13.1133 19.6602L12 20.6729L10.8867 19.6602L10.8857 19.6592C8.30104 17.3154 6.19531 15.4035 4.73047 13.6113C3.27109 11.8259 2.5 10.2206 2.5 8.5C2.5 5.68674 4.69555 3.5 7.5 3.5C9.08865 3.5 10.6216 4.24211 11.6201 5.40527L12 5.84766L12.3799 5.40527C13.3784 4.24211 14.9114 3.5 16.5 3.5Z" fill="#EFE7FF" stroke="#B090EE" />
          </svg>
        ) : (
          <svg width={20} height={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.5 3.5C19.3045 3.5 21.5 5.68674 21.5 8.5C21.5 10.2206 20.7289 11.8259 19.2695 13.6113C17.8047 15.4035 15.699 17.3154 13.1143 19.6592L13.1133 19.6602L12 20.6729L10.8867 19.6602L10.8857 19.6592C8.30104 17.3154 6.19531 15.4035 4.73047 13.6113C3.27109 11.8259 2.5 10.2206 2.5 8.5C2.5 5.68674 4.69555 3.5 7.5 3.5C9.08865 3.5 10.6216 4.24211 11.6201 5.40527L12 5.84766L12.3799 5.40527C13.3784 4.24211 14.9114 3.5 16.5 3.5Z" stroke="#C2C2C2" />
          </svg>
        )}
      </button>
    </div>
  );
}
