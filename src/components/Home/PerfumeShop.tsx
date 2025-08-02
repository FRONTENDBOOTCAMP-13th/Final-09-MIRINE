import styles from "./perfumeShop.module.css";
import Container from "@/components/ui/Container";
import Link from "next/link";

export default function PerfumeShop() {
  return (
    <>
      <Container>
        <div className={styles.perfume_shop}>
          <div className={styles.text_con}>
            <p className={styles.text}>
              <span>아름다운 당신을 기억으로 남겨요.</span>
              <span>당신의 취향을 확고히 하는 시간.</span>
            </p>
            <Link href="/perfumes" className={styles.link}>
              Shop Now
            </Link>
          </div>

          <div className={styles.title_con}>
            <h3 className={styles.title}>PERFUME SHOP</h3>
          </div>
        </div>
      </Container>
    </>
  );
}
