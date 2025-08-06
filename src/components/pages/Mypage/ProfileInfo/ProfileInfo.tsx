"use client";

import { useState } from "react";
import styles from "./profileInfo.module.css";
import SaveButton from "@/components/pages/Mypage/SaveButton/SaveButton";

export default function ProfileInfo() {
  const [userPassword, setUserPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [postalCode, setPostalCode] = useState("");
  const [address, setAddress] = useState("");
  const [detailAddress, setDetailAddress] = useState("");

  //에러 상태
  const [passwordError, setPasswordError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSave = async () => {
    setPasswordError("");

    if (newPassword && !userPassword) {
      setPasswordError("기존 비밀번호를 입력해주세요");
      return;
    }
    if (newPassword && newPassword.length < 6) {
      setPasswordError("비밀번호는 6자 이상 입력해주세요.");
      return;
    }
    if (newPassword && newPassword !== confirmPassword) {
      setPasswordError("새 비밀번호가 일치하지 않습니다.");
      return;
    }

    // if (userPassword && userPassword !== '기존비밀번호') { // 임시 비번 확인
    //   setPasswordError('올바르지 않은 비밀번호입니다.');
    //   return;
    // }

    setIsLoading(true);

    try {
      const profileData = {
        password: userPassword,
        newPassword: newPassword,
        postalCode: postalCode,
        address: address,
        detailAddress: detailAddress,
      };

      console.log("저장할 데이터:", profileData);

      // API 호출 시뮬레이션
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // 성공 시 비밀번호 필드 초기화
      setUserPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (error) {
      console.error("저장 오류:", error);
      setPasswordError("저장 중 오류가 발생했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.profile_info}>
      <form className={styles.profile_info_form}>
        <div className={styles.section}>
          <label htmlFor="userId" className={styles.label}>
            아이디
          </label>
          <input type="text" id="userId" value="mirine123" readOnly className={styles.readonly} />
        </div>

        <hr className={styles.line} />

        <div className={styles.section}>
          <label htmlFor="userName" className={styles.label}>
            성명
          </label>
          <input type="tel" id="userName" value="홍*동" readOnly className={styles.readonly} />
        </div>

        <hr className={styles.line} />

        <div className={styles.section}>
          <label htmlFor="userNumber" className={styles.label}>
            연락처
          </label>
          <input type="text" id="userNumber" value="010-****-1234" readOnly className={styles.readonly} />
        </div>

        <hr className={styles.line} />

        <div className={styles.pw_section}>
          <div className={styles.section}>
            <label htmlFor="userPassword" className={styles.label}>
              비밀번호
            </label>
            <input
              type="password"
              id="userPassword"
              value={userPassword}
              onChange={(e) => {
                setUserPassword(e.target.value);
                if (passwordError) setPasswordError("");
              }}
              className={styles.input}
            />
          </div>

          <div className={styles.section}>
            <label htmlFor="userNewPw" className={styles.label}>
              새 비밀번호
            </label>
            <input
              type="password"
              id="userNewPw"
              // defaultValue="1234"
              value={newPassword}
              onChange={(e) => {
                setNewPassword(e.target.value);
                if (passwordError) setPasswordError("");
              }}
              className={styles.input}
            />
          </div>

          <div className={styles.section}>
            <label htmlFor="userNewPwCheck" className={styles.label}>
              새 비밀번호 확인
            </label>
            <input
              type="password"
              id="userNewPwCheck"
              placeholder="비밀번호를 입력해주세요"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                if (passwordError) setPasswordError("");
              }}
              className={styles.input}
            />

            {/* 에러 메시지 표시 */}
            {confirmPassword && confirmPassword !== newPassword && <p className={styles.error_message}>비밀번호가 일치하지 않습니다.</p>}
          </div>

          {/* 저장 시 에러 메시지 */}
          {passwordError && <p className={styles.error_message}>{passwordError}</p>}
        </div>

        <hr className={styles.line} />

        <div className={styles.section}>
          <label htmlFor="postalCode" className={styles.label}>
            주소 정보
          </label>

          <div className={styles.address}>
            <div className={styles.postal_code}>
              <input type="text" id="postalCode" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} className={styles.input} />

              {/* 우편번호 검색 버튼 */}
              <button
                type="button"
                className={styles.search_btn}
                onClick={() => {
                  console.log("우편번호 검색");
                }}
              >
                우편번호 검색
              </button>
            </div>

            <input type="text" id="mainAddress" value={address} onChange={(e) => setAddress(e.target.value)} className={styles.input} />
            <input type="text" id="detailAddress" value={detailAddress} onChange={(e) => setDetailAddress(e.target.value)} placeholder="상세주소" className={styles.input} />
          </div>
        </div>
      </form>

      <SaveButton onClickSave={handleSave} disabled={isLoading} />
    </div>
  );
}
