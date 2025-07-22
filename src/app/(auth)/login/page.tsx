"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Script from "next/script";
import styles from "./login.module.css";
import {
  auth,
  provider,
  signInWithPopup,
} from "../../../api/firebase/firebase";

declare global {
  interface Window {
    Kakao: any;
    naver: any;
  }
}

export default function Login() {
  const [user, setUser] = useState<any>(null);
  const [kakaoReady, setKakaoReady] = useState(false);
  const [naverReady, setNaverReady] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        router.push("/");
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, [router]);

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      alert("구글 로그인 실패");
    }
  };

  const handleKakaoLogin = () => {
    if (
      !window.Kakao ||
      !window.Kakao.Auth ||
      typeof window.Kakao.Auth.login !== "function"
    ) {
      alert("Kakao SDK가 아직 준비되지 않았습니다.");
      return;
    }

    window.Kakao.Auth.login({
      throughTalk: false,
      success: function (authObj: any) {
        localStorage.setItem("kakaoLogin", "true");
        router.push("/");
      },
      fail: function (err: any) {
        alert("카카오 로그인 실패");
      },
    });
  };

  const handleNaverLogin = () => {
    if (!naverReady) {
      alert("네이버 SDK가 아직 준비되지 않았습니다.");
      return;
    }
    const loginBtn = document.getElementById("naverIdLogin")
      ?.firstChild as HTMLElement;
    if (loginBtn) {
      loginBtn.click();
    }
  };

  return (
    <>
      {/* Kakao SDK */}
      <Script
        src="https://developers.kakao.com/sdk/js/kakao.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (!window.Kakao.isInitialized()) {
            window.Kakao.init("5f119b39694599fdc09f409b96af8449");
            console.log("Kakao SDK initialized");
          }
          setKakaoReady(true);
        }}
      />

      {/* Naver SDK */}
      <Script
        src="https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js"
        strategy="afterInteractive"
        onLoad={() => {
          const naverLogin = new window.naver.LoginWithNaverId({
            clientId: "Eti6FmhTHPMEDD8yTu1i",
            callbackUrl: "http://localhost:3000/naverLoginCallback",
            isPopup: false,
            loginButton: { color: "green", type: 3, height: 50 },
          });

          naverLogin.init();
          setNaverReady(true);
        }}
      />

      <div className={styles.container}>
        <div className={styles.loginBox}>
          <h2 className={styles.title}>로그인</h2>
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
          </form>

          <div className={styles.loginButtons}>
            <button type="submit" className={styles.loginButton}>
              로그인
            </button>
            <button type="button" className={styles.signupButton}>
              회원가입
            </button>
          </div>

          <div className={styles.easyLogin}>
            <h3>간편 로그인</h3>
            <div className={styles.easyLoginButtons}>
              <button
                onClick={handleGoogleLogin}
                className={styles.easyLoginButton}
                aria-label="Google 로그인"
              >
                <span className={styles.googleIcon} />
              </button>
              <button
                onClick={handleNaverLogin}
                className={styles.easyLoginButton}
                disabled={!naverReady}
                aria-label="Naver 로그인"
              >
                <span className={styles.naverIcon} />
              </button>
              <button
                onClick={handleKakaoLogin}
                className={styles.easyLoginButton}
                disabled={!kakaoReady}
                aria-label="Kakao 로그인"
              >
                <span className={styles.kakaoIcon} />
              </button>

              <div id="naverIdLogin" style={{ display: "none" }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
