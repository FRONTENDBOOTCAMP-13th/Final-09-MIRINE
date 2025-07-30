"use client";

import Script from "next/script";
import styles from "./signup.module.css";
import SignUpForm from "../../../components/SignUp/SignUpForm";

export default function SignUpPage() {
  return (
    <>
      {/* Daum 주소 API 스크립트 */}
      <Script
        src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"
        strategy="afterInteractive"
      />
      <div className={styles.container}>
        <div className={styles.card}>
          <h2 className={styles.title}>회원가입</h2>
          <SignUpForm />
        </div>
      </div>
    </>
  );
}
