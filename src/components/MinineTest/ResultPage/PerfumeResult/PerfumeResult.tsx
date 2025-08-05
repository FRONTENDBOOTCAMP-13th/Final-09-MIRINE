"use client";
import styles from "@/components/MinineTest/ResultPage/PerfumeResult/perfumeResult.module.css";
import { SmallButton } from "@/components/ui/Button/SmallButton";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function PerfumeResultList() {
  const router = useRouter();

  const handleGoPage = () => {
    router.push("/perfumes");
  };

  return (
    <li className={styles.perfume}>
      <Image src="/image/perfume1.svg" alt="향수 이미지" width="40" height="40" className={styles.perfume_img} />
      <div className={styles.perfume_info}>
        <p className={styles.brand_name}>브랜드</p>
        <p className={styles.product_name}>향수이름</p>
      </div>

      <SmallButton className={styles.go_btn} ButtonColor="blue" onClick={handleGoPage}>
        바로가기
      </SmallButton>
    </li>
  );
}
