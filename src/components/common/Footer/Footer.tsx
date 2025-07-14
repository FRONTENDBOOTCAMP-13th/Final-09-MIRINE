import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <img src="/footer/logo.svg" alt="로고" className={styles.logoImage} />
        <div className={styles.info}>이용약관 | 개인정보처리방침</div>
        <div className={styles.copy}>
          Copyright ⓒ 2025 미리내 All rights reserved.
        </div>
      </div>
    </footer>
  );
}
