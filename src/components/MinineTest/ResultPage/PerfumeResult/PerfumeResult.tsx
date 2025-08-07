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
    <ul>
      <li className={styles.perfume}>
        <Image
          src="/image/perfume14.webp"
          alt="탐다오 오 드 퍼퓸"
          width={40}
          height={40}
          className={styles.perfume_img}
        />
        <div className={styles.perfume_info}>
          <p className={styles.brand_name}>딥디크</p>
          <p className={styles.product_name}>탐다오 오 드 퍼퓸</p>
        </div>
        <SmallButton className={styles.go_btn} ButtonColor="blue" onClick={handleGoPage}>
          바로가기
        </SmallButton>
      </li>

      <li className={styles.perfume}>
        <Image
          src="/image/perfume10.webp"
          alt="프라다 레스 인퓨전 드 프라다"
          width={40}
          height={40}
          className={styles.perfume_img}
        />
        <div className={styles.perfume_info}>
          <p className={styles.brand_name}>프라다</p>
          <p className={styles.product_name}>프라다 레스 인퓨전 드 프라다</p>
        </div>
        <SmallButton className={styles.go_btn} ButtonColor="blue" onClick={handleGoPage}>
          바로가기
        </SmallButton>
      </li>

      <li className={styles.perfume}>
        <Image
          src="/image/perfume12.webp"
          alt="다크 앰버 앤 진저 릴리 코롱 인텐스"
          width={40}
          height={40}
          className={styles.perfume_img}
        />
        <div className={styles.perfume_info}>
          <p className={styles.brand_name}>조말론</p>
          <p className={styles.product_name}>다크 앰버 앤 진저 릴리 코롱 인텐스</p>
        </div>
        <SmallButton className={styles.go_btn} ButtonColor="blue" onClick={handleGoPage}>
          바로가기
        </SmallButton>
      </li>
    </ul>
  );
}
// "use client";
// import styles from "@/components/MinineTest/ResultPage/PerfumeResult/perfumeResult.module.css";
// import { SmallButton } from "@/components/ui/Button/SmallButton";
// import Image from "next/image";
// import { useRouter } from "next/navigation";

// export default function PerfumeResultList() {
//   const router = useRouter();

//   const handleGoPage = () => {
//     router.push("/perfumes");
//   };


//   return (
//     <li className={styles.perfume}>
//       <Image src="/image/perfume1.svg" alt="향수 이미지" width="40" height="40" className={styles.perfume_img} />
//       <div className={styles.perfume_info}>
//         <p className={styles.brand_name}>브랜드</p>
//         <p className={styles.product_name}>향수이름</p>
//       </div>

//       <SmallButton className={styles.go_btn} ButtonColor="blue" onClick={handleGoPage}>
//         바로가기
//       </SmallButton>
//     </li>
//   );
// }