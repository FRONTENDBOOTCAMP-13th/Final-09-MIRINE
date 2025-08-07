import AromaShooterButton from "@/components/pages/AromaShooter/Button/AromaShooterButton";
import styles from "./aromaShooterShop.module.css";
import Image from "next/image";

export default function AromaShooterShop() {
  return (
    <ul className={styles.product_list}>
      <li className={styles.list_item_1}>
        <Image className={styles.image} width={470} height={470} src="/aromaShooter/aroma-shooter2.webp" alt="Aroma Shooter ®2"></Image>
        <div className={styles.text}>
          <h3>Aroma Shooter ®2</h3>
          <p>새로운 향기의 세계로.</p>
          <AromaShooterButton href={"https://aromajoin.com/products/aroma-shooter"}>Buy Now</AromaShooterButton>
        </div>
      </li>
      <li className={styles.list_item_2}>
        <svg className={styles.circular_text} viewBox="0 0 300 300">
          <defs>
            <path id="circular_text" d="M 150, 150 m -100, 0 a 100,100 0 1,1 200,0 a 100,100 0 1,1 -200,0" />
          </defs>
          <text className={styles.svg_text}>
            <textPath href="#circular_text">AROMA SHOOTER &nbsp; AROMA SHOOTER &nbsp; AROMA SHOOTER</textPath>
          </text>
        </svg>

        <Image className={styles.image} width={470} height={470} src="/aromaShooter/aroma-shooter3.webp" alt="Aroma Shooter ®3"></Image>
        <div className={styles.text}>
          <h3>Aroma Shooter ®3</h3>
          <p>
            Aroma Shooter ®2 보다
            <br />
            1.4m 멀리
          </p>
          <AromaShooterButton href={"https://aromajoin.com/products/aroma-shooter-3"}>Buy Now</AromaShooterButton>
        </div>
      </li>
    </ul>
  );
}
