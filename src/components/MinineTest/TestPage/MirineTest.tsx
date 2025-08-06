'use client'
import TestHeader from "@/components/MinineTest/Header/Header";
import styles from "./mirineTest.module.css";
import Image from "next/image";

export default function MirineTest() {
  const handleButtonClick = () => {
    const messages = [
      "테스트는 나중에~",
      "뒤로가기..😅"
    ];

    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    alert(randomMessage);
  };

  return (
    <div className={styles.mirine_test}>
      <TestHeader />
      <div className={styles.question_graph}>
        <div className={styles.question_num}>1/5</div>
        <div className={styles.graph}>
          <span className={styles.bar}></span>
        </div>
      </div>
      <p className={styles.question}>다음 중 가장 끌리는 향은 무엇인가요?</p>
      <div className={styles.img}>
        <Image src="/image/test-plane.svg" alt="이미지" width={152} height={152} priority />
      </div>
      <nav className={styles.choice}>
        <button 
          type="button" 
          className={styles.answer1}
          onClick={handleButtonClick}
          >디저트의 달콤함</button>
        <button 
          type="button" 
          className={styles.answer2}
          onClick={handleButtonClick}
          >사탕, 망고와 같은 상큼 없는 달콤함</button>
        <button 
          type="button" 
          className={styles.answer3}
          onClick={handleButtonClick}
          >과일, 꽃의 상큼달달한 향</button>
        <button 
          type="button" 
          className={styles.answer4}
          onClick={handleButtonClick}
          >달콤은 빼주세요</button>
      </nav>
    </div>
  );
}