"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NaverLoginCallback() {
  const router = useRouter();

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) {
      alert("네이버 로그인 실패: 토큰 없음");
      router.push("/login");
      return;
    }

    const params = new URLSearchParams(hash.substring(1));
    const accessToken = params.get("access_token");
    const state = params.get("state");

    if (accessToken) {
      console.log("네이버 access token:", accessToken);
      localStorage.setItem("naverLogin", "true");
      router.push("/");
    } else {
      alert("네이버 로그인 실패");
      router.push("/login");
    }
  }, [router]);

  return <p>로그인 처리 중입니다...</p>;
}
