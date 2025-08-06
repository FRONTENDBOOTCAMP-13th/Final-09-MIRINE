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
      <p className={styles.question}>다음 중 가장 끌리는 향은 무엇인가요?</p>
      {/* 비행기 이미지 */}
      <div className={styles.img}>
        <Image src="/image/test-plane.svg" alt="이미지" width={152} height={152} priority />
      </div>
      {/* 선택지 */}
      <nav className={styles.choice}>
        <button 
          type="button" 
          className={styles.answer1}
          >디저트의 달콤함</button>
        <button 
          type="button" 
          className={styles.answer2}>사탕, 망고와 같은 상큼 없는 달콤함</button>
        <button 
          type="button" 
          className={styles.answer3}>과일, 꽃의</button>
        <button 
          type="button" 
          className={styles.answer4}>선택4</button>
      </nav>
    </div>
  );
}