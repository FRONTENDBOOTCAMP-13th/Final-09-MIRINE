'use client'
import styles from "@/components/MinineTest/ResultPage/Button/testButton.module.css"
import { useRouter } from "next/navigation";

export default function TestButton() {
  const router = useRouter();
  const handleGoHome = () => {
    router.push('/');
  }

  const handleGoTest = () => {
    router.push('/');
  }

  return (
    <div className={styles.btn_group}>
    <button 
      type="button" 
      className={styles.home_btn}
      onClick={handleGoHome}
      >홈으로 이동하기</button>
    <button 
      type="button" 
      className={styles.again_btn}
      onClick={handleGoTest}
      >테스트 다시하기</button>
    </div>
  )
}