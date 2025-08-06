import styles from "./aromaShooter.module.css";
import HomeButton from "@/components/pages/Home/Button/HomeButton";
import Image from "next/image";

export default function AromaShooter() {
  return (
    <div className={styles.aroma_shooter}>
      <div className={styles.inner}>
        <div className={styles.cont_head}>
          <h3 className={styles.title}>AROMA SHOOTER</h3>
          <p className={styles.description}>
            <span>60가지 향을 먼저 만나보세요.</span>
            <span>향수를 고르기 전, 가장 감각적인 탐색.</span>
          </p>
          <HomeButton href={"/aroma-shooter"}>Learn More</HomeButton>
        </div>

        <ul className={styles.product_list}>
          <li>
            <Image width={300} height={300} src="/home/aroma-shooter2.webp" alt="Aroma Shooter ®2"></Image>
            <h4>Aroma Shooter ®2</h4>
            <p>새로운 향기의 세계로.</p>
          </li>
          <li>
            <Image width={300} height={300} src="/home/aroma-shooter3.webp" alt="Aroma Shooter ®3"></Image>
            <h4>Aroma Shooter ®3</h4>
            <p>Aroma Shooter ®2 보다 1.4m 멀리</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
