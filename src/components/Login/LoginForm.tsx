"use client";

import { useRouter } from "next/navigation";
import styles from "./loginForm.module.css";

export default function LoginForm() {
  const router = useRouter();

  return (
    <form className={styles.form}>
      <input
        type="text"
        placeholder="아이디를 입력해주세요"
        className={styles.input}
      />
      <input
        type="password"
        placeholder="비밀번호를 입력해주세요"
        className={styles.input}
      />

      <div className={styles.options}>
        <label className={styles.checkboxLabel}>
          <input type="checkbox" className={styles.checkbox} />
          로그인 상태 유지
        </label>
        <a href="#" className={styles.findLink}>
          ID/PW 찾기
        </a>
      </div>

      <div className={styles.loginButtons}>
        <button type="submit" className={styles.loginButton}>
          로그인
        </button>
        <button
          type="button"
          className={styles.signupButton}
          onClick={() => router.push("/signup")}
        >
          회원가입
        </button>
      </div>

      <div className={styles.easyLogin}>
        <h3>간편 로그인</h3>
        <div className={styles.easyLoginButtons}>
          <button
            type="button"
            className={styles.easyLoginButton}
            aria-label="Google 로그인"
          >
            <span className={styles.googleIcon} />
          </button>
          <button
            type="button"
            className={styles.easyLoginButton}
            aria-label="Naver 로그인"
          >
            <span className={styles.naverIcon} />
          </button>
          <button
            type="button"
            className={styles.easyLoginButton}
            aria-label="Kakao 로그인"
          >
            <span className={styles.kakaoIcon} />
          </button>
        </div>
      </div>
    </form>
  );
}
