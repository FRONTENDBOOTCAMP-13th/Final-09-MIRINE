"use client";
import { login } from "@/lib/action";
import styles from "./loginForm.module.css";
import { useActionState, useEffect } from "react";
export default function LoginForm() {
  const [userState, formAction, isLoading] = useActionState(login, null);
  console.log(isLoading, userState);
  useEffect(() => {
    if (userState?.ok) console.log("userState", userState);
    else console.log("userState", userState);
    if (userState?.ok) {
      localStorage.setItem("accessToken", userState.item.token.accessToken);
      localStorage.setItem("userId", userState.item._id);
      console.log("userId", userState.item._id);
      console.log("token", userState.item.token.accessToken);
    }
  });
  return (
    <form action={formAction} className={styles.form}>
      <input id="email" name="email" type="text" placeholder="아이디를 입력해주세요" className={styles.input} />
      <input id="password" name="password" type="password" placeholder="비밀번호를 입력해주세요" className={styles.input} />

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
        <button type="button" className={styles.signupButton}>
          회원가입
        </button>
      </div>
    </form>
  );
}
