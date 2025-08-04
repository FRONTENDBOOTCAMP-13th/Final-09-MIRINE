import Image from "next/image";
import styles from "./aromaCartridge.module.css";
import AromaShooterButton from "@/components/AromaShooter/Button/AromaShooterButton";
import Container from "@/components/ui/Container";

export default function AromaCartridge() {
  return (
    <Container>
      <div className={styles.aromaCartridge}>
        <Image className={styles.image} src="/aromaShooter/aroma-cartridge.webp" width={700} height={330} alt="아로마 카트리지" />
        <div className={styles.discription}>
          <h3>Aroma Cartridge</h3>
          <p>
            <span>고체 향료가 드어있는 향기 카트리지 입니다.</span>
            <span>현재 약 100 종류의 향기를 제공하고 있습니다.</span>
          </p>
          <AromaShooterButton href={"/"}>Buy Now</AromaShooterButton>
        </div>
      </div>
    </Container>
  );
}
