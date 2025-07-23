import styles from "./nameDateTime.module.css";

export default function List(){
  return(
    <div className={styles.review_info}> 
      <div className={styles.user_info}>
        <p className={styles.name}>이름</p>
        <p className={styles.datetime}>날짜 시간</p>
      </div>
      <div className={styles.star}>별점</div>
    </div>
  )
}