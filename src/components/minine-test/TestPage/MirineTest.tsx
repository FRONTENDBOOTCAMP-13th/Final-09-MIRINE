import styles from "./mirineTest.module.css";
import Image from "next/image";

export default function MirineTest() {
  return (
    <div className={styles.test}>
      {/* 진행률 그래프 */}
      <div className={styles.question_graph}>
        <div className={styles.question_num}>1/5</div>
        <div className={styles.graph}>
          <span className={styles.num}></span>
        </div>

      </div>
      <p className={styles.question}>질문</p>

      <div className={styles.img}>
        <Image src="/image/test-plane.svg" alt="이미지" width={152} height={152} />
      </div>

      <section className={styles.choice}>
        <div className={styles.answer1}>선택1</div>
        <div className={styles.answer2}>선택2</div>
        <div className={styles.answer3}>선택3</div>
        <div className={styles.answer4}>선택4</div>
      </section>
    </div>
  );
}