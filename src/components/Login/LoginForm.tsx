"use client";

import { useRouter } from "next/navigation";
import styles from "./loginForm.module.css";
import { useActionState, useEffect } from "react";
import { login } from "@/lib/action";
import useUserStore from "@/store/userStore";
import useMirineStore from "@/store/mirineStore";
import useShoppingCartStore from "@/store/shoppingCartStore";

export default function LoginForm() {
  const router = useRouter();
  const [userState, formAction, isLoading] = useActionState(login, null);
  const setUser = useUserStore((state) => state.setUser);
  const resetMirine = useMirineStore((state) => state.resetMirine);
  const resetShoppingCart = useShoppingCartStore((state) => state.resetShoppingCart);
  console.log(isLoading, userState);
  useEffect(() => {
    if (userState?.ok) console.log("userState", userState);
    else console.log("userState", userState);
    if (userState?.ok) {
      setUser(userState.item);
      resetShoppingCart();
      resetMirine();
      router.push("/");
    }
  });

  return (
    <form action={formAction} className={styles.form}>
      <input type="text" name="email" placeholder="아이디를 입력해주세요" className={styles.input} />
      <input type="password" name="password" placeholder="비밀번호를 입력해주세요" className={styles.input} />

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
        <button type="button" className={styles.signupButton} onClick={() => router.push("/signup")}>
          회원가입
        </button>
      </div>

      {/* 간편 로그인 기능 있을 시 */}
      {/* <div className={styles.easyLogin}>
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
      </div> */}
    </form>
  );
}
