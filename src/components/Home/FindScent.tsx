import styles from "./findScent.module.css";
import Container from "@/components/ui/Container";
import Link from "next/link";

export default function FindScent() {
  return (
    <>
      <Container>
        <div className={styles.find_scent}>
          <h3 className={styles.title}>FIND SCENT</h3>
          <div className={styles.content}>
            <p className={styles.text}>
              <span>나는 어떤 향을 닮았을까.&nbsp;</span>
              <span>천천히 알아가 볼까요?</span>
            </p>
            <Link href="/mirine-test" className={styles.link}>
              Test Start
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
}
