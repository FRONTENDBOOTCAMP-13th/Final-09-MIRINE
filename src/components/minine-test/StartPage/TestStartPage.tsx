import styles from "./testStartPage.module.css";

export default function TestStartPage(){
  return(
    <div className={styles.test_start}>
      <h1 className={styles.title}>당신의 향수는?</h1>
      <div className={styles.btn_group}>
        <button className={`${styles.btn} ${styles.btn_start}`} >테스트 시작하기</button>
        <button className={`${styles.btn} ${styles.btn_home}`}>홈으로 이동하기</button>
      </div>
    </div>
  );
}