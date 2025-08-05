import Link from "next/link";
import styles from "./homeButton.module.css";

interface HomeButton {
  href: string;
  children: string;
};

export default function HomeButton({ href, children }: HomeButton) {
  return (
    <Link href={href} className={styles.link}>
      {children}
    </Link>
  );
}
