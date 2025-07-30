"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./signupform.module.css";

export default function SignUpForm() {
  const router = useRouter();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [detail, setDetail] = useState("");
  const [phone, setPhone] = useState("");

  const [agreeAll, setAgreeAll] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [agreePrivacy, setAgreePrivacy] = useState(false);

  const isIdValid = id.length >= 5;
  const isPasswordMatch = password === confirm;

  const formatPhoneNumber = (value: string) => {
    const onlyNums = value.replace(/\D/g, "");
    if (onlyNums.length <= 3) return onlyNums;
    if (onlyNums.length <= 7)
      return `${onlyNums.slice(0, 3)}-${onlyNums.slice(3)}`;
    return `${onlyNums.slice(0, 3)}-${onlyNums.slice(3, 7)}-${onlyNums.slice(
      7,
      11
    )}`;
  };

  const handleAgreeAll = (checked: boolean) => {
    setAgreeAll(checked);
    setAgreeTerms(checked);
    setAgreePrivacy(checked);
  };

  return (
    <div className={styles.signup}>
      <div className={styles.field}>
        <label>아이디 (5자 이상)</label>
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="로그인 시 사용"
        />
        {id && (
          <span className={isIdValid ? styles.success : styles.error}>
            {isIdValid ? "사용 가능" : "5자 이상 입력해주세요"}
          </span>
        )}
      </div>

      <div className={styles.field}>
        <label>휴대폰 번호</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(formatPhoneNumber(e.target.value))}
          placeholder="010-1234-5678"
          maxLength={13}
        />
      </div>

      <div className={styles.field}>
        <label>비밀번호 (8자 이상, 숫자+문자 포함)</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className={styles.field}>
        <label>비밀번호 확인</label>
        <input
          type="password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
        />
        {confirm && (
          <span className={isPasswordMatch ? styles.success : styles.error}>
            {isPasswordMatch ? "비밀번호 일치" : "비밀번호가 일치하지 않아요"}
          </span>
        )}
      </div>

      <div className={styles.field}>
        <label>주소 정보</label>
        <div className={styles.addressRow}>
          <input type="text" placeholder="12345" readOnly />
          <button className={styles.zipButton}>우편번호 검색</button>
        </div>
        <input type="text" placeholder="기본 주소" readOnly />
        <input
          type="text"
          placeholder="상세주소"
          value={detail}
          onChange={(e) => setDetail(e.target.value)}
        />
      </div>

      <div className={styles.termsSection}>
        <h2 className={styles.termstitle}>약관동의</h2>
        <label className={styles.checkbox}>
          <input
            type="checkbox"
            checked={agreeAll}
            onChange={(e) => handleAgreeAll(e.target.checked)}
          />
          <span className={styles.allAgree}>전체 동의</span>
        </label>

        <label className={styles.checkbox}>
          <input
            type="checkbox"
            checked={agreeTerms}
            onChange={(e) => setAgreeTerms(e.target.checked)}
          />
          <span className={styles.required}>[필수]</span>
          <span>이용약관에 동의</span>
        </label>
        <div className={styles.termsBox}>
          <div className={styles.textarea}>
            <p className={styles.termsTitle}>제1조 (목적)</p>
            <p>
              이 약관은 No.9가 운영하는 미리내의 이용에 관한 조건 및 절차를
              규정함을 목적으로 합니다.
            </p>
            <p className={styles.termsTitle}>제2조 (이용 계약의 성립)</p>
            <p>
              1. 이용자는 본 약관에 동의함으로써 회사와 이용 계약을 체결합니다.
            </p>
            <p>2. 회사는 이용자의 신청을 승인함으로써 계약이 성립됩니다.</p>
            <p className={styles.termsTitle}>제3조 (서비스의 제공)</p>
            <p>
              회사는 이용자에게 다음과 같은 서비스를 제공합니다: 정보 제공, 상품
              판매 등
            </p>
            <p className={styles.termsTitle}>제4조 (이용자의 의무)</p>
            <p>
              이용자는 본 약관 및 관련 법령을 준수하여야 합니다. 타인의 권리를
              침해하거나 불법 행위를 해서는 안 됩니다.
            </p>
            <p className={styles.termsTitle}>제5조 (서비스의 변경 및 중단)</p>
            <p>
              회사는 서비스 내용 및 운영 방식을 변경할 수 있으며, 사전에
              공지합니다.
            </p>
            <p className={styles.termsTitle}>제6조 (면책 조항)</p>
            <p>
              회사는 천재지변 등 불가항력적 사유로 인한 서비스 중단에 책임을
              지지 않습니다.
            </p>
            <p className={styles.termsTitle}>제7조 (약관의 변경)</p>
            <p>
              회사는 필요에 따라 본 약관을 변경할 수 있으며, 변경 시 공지합니다.
            </p>
            <p className={styles.termsTitle}>제8조 (관할 법원)</p>
            <p>본 약관에 관한 분쟁은 관할 법원의 판결에 따릅니다.</p>
          </div>
        </div>

        <label className={styles.checkbox}>
          <input
            type="checkbox"
            checked={agreePrivacy}
            onChange={(e) => setAgreePrivacy(e.target.checked)}
          />
          <span className={styles.required}>[필수]</span>
          <span>개인정보 수집 · 이용에 동의</span>
        </label>
        <div className={styles.termsBox}>
          <div className={styles.textarea}>
            <p className={styles.termsTitle}>제1조 (목적)</p>
            <p>
              이 약관은 No.9가 운영하는 미리내의 이용에 관한 조건 및 절차를
              규정함을 목적으로 합니다.
            </p>
            <p className={styles.termsTitle}>제2조 (이용 계약의 성립)</p>
            <p>
              1. 이용자는 본 약관에 동의함으로써 회사와 이용 계약을 체결합니다.
            </p>
            <p>2. 회사는 이용자의 신청을 승인함으로써 계약이 성립됩니다.</p>
            <p className={styles.termsTitle}>제3조 (서비스의 제공)</p>
            <p>
              회사는 이용자에게 다음과 같은 서비스를 제공합니다: 정보 제공, 상품
              판매 등
            </p>
            <p className={styles.termsTitle}>제4조 (이용자의 의무)</p>
            <p>
              이용자는 본 약관 및 관련 법령을 준수하여야 합니다. 타인의 권리를
              침해하거나 불법 행위를 해서는 안 됩니다.
            </p>
            <p className={styles.termsTitle}>제5조 (서비스의 변경 및 중단)</p>
            <p>
              회사는 서비스 내용 및 운영 방식을 변경할 수 있으며, 사전에
              공지합니다.
            </p>
            <p className={styles.termsTitle}>제6조 (면책 조항)</p>
            <p>
              회사는 천재지변 등 불가항력적 사유로 인한 서비스 중단에 책임을
              지지 않습니다.
            </p>
            <p className={styles.termsTitle}>제7조 (약관의 변경)</p>
            <p>
              회사는 필요에 따라 본 약관을 변경할 수 있으며, 변경 시 공지합니다.
            </p>
            <p className={styles.termsTitle}>제8조 (관할 법원)</p>
            <p>본 약관에 관한 분쟁은 관할 법원의 판결에 따릅니다.</p>
          </div>
        </div>
      </div>

      <button className={styles.submit}>가입하기</button>
    </div>
  );
}
