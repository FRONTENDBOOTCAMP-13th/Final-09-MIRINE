"use client";
import styles from "@/components/pages/Mypage/TestResult/ShareButton/shareButton.module.css";
import Image from "next/image";

export default function ShareButton() {
  return (
    <div className={styles.share_btn_wrapper}>
      <button
        type="button"
        className={styles.share_group}
        // onClick={handleLinkCopy}
      >
        <Image className={styles.link_icon} src="/icon/Icon-link3.svg" width={12} height={12} alt="링크 아이콘" />
        <span className={styles.share_btn}>공유하기</span>
      </button>
    </div>
  );
}
