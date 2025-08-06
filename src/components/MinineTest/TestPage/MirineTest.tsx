import TestHeader from "@/components/MinineTest/Header/Header";
import styles from "./mirineTest.module.css";
import Image from "next/image";

export default function MirineTest() {
  return (
    <div className={styles.mirine_test}>
      <TestHeader />

      {/* 진행률 그래프 */}
      <div className={styles.question_graph}>
        <div className={styles.question_num}>1/5</div>
        <div className={styles.graph}>
          <span className={styles.bar}></span>
        </div>
      </div>
      {/* 질문 */}
      <p className={styles.question}>질문</p>
      {/* 비행기 이미지 */}
      <div className={styles.img}>
        <Image src="/image/test-plane.svg" alt="이미지" width={152} height={152} priority />
      </div>
      {/* 선택지 */}
      <nav className={styles.choice}>
        <button 
          type="button" 
          className={styles.answer1}
          >선택1</button>
        <button 
          type="button" 
          className={styles.answer2}>선택2</button>
        <button 
          type="button" 
          className={styles.answer3}>선택3</button>
        <button 
          type="button" 
          className={styles.answer4}>선택4</button>
      </nav>
    </div>
  );
}