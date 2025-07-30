import styles from "./mypageAside.module.css";
export default function MypageAside() {
  return (
    <aside className={styles.aside}>
      <div className={styles.nav}>
        <h2 className={styles.mypage}>
          마이페이지
        </h2>

        <div className={styles.icon}>
          <svg width={12} height={12} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 18L15 12L9 6" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        
        </div>
          <p className={styles.mypage_info}>내 정보</p>
      </div>
      

      <div className={styles.option}>
        <button
          className={styles.option_select}
        >내 정보</button>
      </div>

    </aside>
  );
}
