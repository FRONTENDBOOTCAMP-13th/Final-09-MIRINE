import styles from "./marqueeText.module.css";
import { Sulphur_Point } from "next/font/google";

const sulphurPoint = Sulphur_Point({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-sulphur-point",
});

export default function MarqueeText() {
  return (
    <div className={`${styles.marquee_text} ${sulphurPoint.className}`}>
      <p>Aroma Shooter</p>
    </div>
  );
}
