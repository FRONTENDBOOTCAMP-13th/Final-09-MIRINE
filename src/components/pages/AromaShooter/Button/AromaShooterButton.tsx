import Link from "next/link";
import styles from "./aromaShooterButton.module.css";

type AromaShooterButtonProps = {
  href: string;
  children: string;
};

export default function AromaShooterButton({ href, children }: AromaShooterButtonProps) {
  return (
    <Link href={href} className={styles.link}>
      {children}
    </Link>
  );
}
