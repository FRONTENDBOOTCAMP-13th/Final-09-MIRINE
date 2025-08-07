"use client";

import TestHeader from "@/components/MinineTest/Header/Header";
import styles from "./layout.module.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className={styles.mirine_test_container}>
        <div className={styles.mirine_test_layout}>
          <TestHeader />
          <div className={styles.mirine_test_content}>{children}</div>
        </div>
      </div>
    </>
  );
}
