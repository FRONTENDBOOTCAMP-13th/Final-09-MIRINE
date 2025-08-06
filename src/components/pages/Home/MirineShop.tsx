import styles from "./mirineShop.module.css";
import HomeButton from "@/components/pages/Home/Button/HomeButton";
import Container from "@/components/ui/Container";

export default function MirineShop() {
  return (
    <Container>
      <div className={styles.mirine_shop}>
        <div className={styles.title_con}>
          <h3 className={styles.title}>MIRINE SHOP</h3>
        </div>
        <div className={styles.text_con}>
          <p className={styles.text}>
            <span>
              <strong>미리내</strong>와 함께
            </span>
            <span>당신의 마음이 머무는 향을</span>
            <span>찾아보세요.</span>
          </p>
          <HomeButton href={"/mirine"}>Shop Now</HomeButton>
        </div>
      </div>
    </Container>
  );
}
