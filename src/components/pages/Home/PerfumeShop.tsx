import styles from "./perfumeShop.module.css";
import HomeButton from "@/components/pages/Home/Button/HomeButton";
import Container from "@/components/ui/Container";

export default function PerfumeShop() {
  return (
    <Container>
      <div className={styles.perfume_shop}>
        <div className={styles.text_con}>
          <p className={styles.text}>
            <span>아름다운 당신을 기억으로 남겨요.</span>
            <span>당신의 취향을 확고히 하는 시간.</span>
          </p>
          <HomeButton href={"/perfumes"}>Shop Now</HomeButton>
        </div>

        <div className={styles.title_con}>
          <h3 className={styles.title}>PERFUME SHOP</h3>
        </div>
      </div>
    </Container>
  );
}
