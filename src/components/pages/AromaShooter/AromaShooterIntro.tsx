import Image from "next/image";
import styles from "./aromaShooterIntro.module.css";
import Container from "@/components/ui/Container";

export default function AromaShooterIntro() {
  return (
    <Container>
      <div className={styles.aroma_shooter_intro}>
        <div className={styles.intro_head}>
          <h1 className={styles.intro_logo}>
            <Image src="/aromaShooter/mirine-aromajoin.svg" width={484} height={40} alt="미리내 x 아로마조인" />
          </h1>
          <h2 className={styles.title}>아로마슈터</h2>
          <p className={styles.subtitle}>
            약 60가지 이상의 향을 구현하는 디바이스
            <span>(*전용 향 카트리지)</span>
          </p>
        </div>

        <div className={styles.description}>
          <p>
            <span>우리는 향이 주는 감정과 순간을 더 많은 사람과 나누고 싶었고,</span>
            <span>아로마슈터는 향을 눈앞에 구현하는 정교한 기술을 가지고 있었습니다.</span>
          </p>
          <br />
          <p>
            <b>
              약 60가지 이상의 향을 구현하는 디바이스 <span>‘아로마슈터’</span>와
            </b>
            <b>
              전용 <span>향 카트리지</span>를 함께 소개합니다.
            </b>
          </p>
          <br />
          <p>
            <span>지금, 당신의 공간에서도</span>
            <span>원하는 순간에 향이 자연스럽게 흐르는 경험을 만나보세요.</span>
          </p>
        </div>
      </div>
    </Container>
  );
}
