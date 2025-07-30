"use client";

import Script from "next/script";
import styles from "./login.module.css";
import LoginForm from "../../../components/Login/LoginForm";

export default function LoginPage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.loginBox}>
          <h2 className={styles.title}>로그인</h2>
          <LoginForm />
        </div>
      </div>
    </>
  );
}
