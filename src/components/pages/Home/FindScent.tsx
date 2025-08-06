import styles from "./findScent.module.css";
import Container from "@/components/ui/Container";
import HomeButton from "@/components/pages/Home/Button/HomeButton";

export default function FindScent() {
  return (
    <Container>
      <div className={styles.find_scent}>
        <h3 className={styles.title}>FIND SCENT</h3>
        <div className={styles.content}>
          <p className={styles.text}>
            <span>나는 어떤 향을 닮았을까.&nbsp;</span>
            <span>천천히 알아가 볼까요?</span>
          </p>
          <HomeButton href={"/mirine-test"}>Test Start</HomeButton>
        </div>
      </div>
    </Container>
  );
}
