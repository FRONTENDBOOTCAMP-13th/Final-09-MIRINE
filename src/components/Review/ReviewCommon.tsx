import styles from "./reviewCommon.module.css";
import ReviewButton from "@/components/Review/ReviewButton/ReviewButton";
// import ListGrid from "@/components/Review/ListGrid/ListGrid";

export default function ReviewCommon() {
  // const count = 123;
  return (
    <div className={styles.common_section}>
      <h2 className={styles.title}>리뷰</h2>

      <nav className={styles.btn_group}>
        <ul className={styles.category_list}>
          {/* <div className={styles.count_icon_section}>
            <p className={styles.count}>총 {count}개</p>
            <ListGrid />
          </div> */}
          <ReviewButton />
        </ul>
      </nav>
    </div>
  );
}
