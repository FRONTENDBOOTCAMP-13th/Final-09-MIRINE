import styles from "./mirineShop.module.css";
import Container from "@/components/ui/Container";
import Link from "next/link";

export default function MirineShop() {
  return (
    <>
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
            <Link href="/mirine" className={styles.link}>
              Shop Now
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
}
