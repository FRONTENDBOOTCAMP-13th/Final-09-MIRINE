"use client";
import { useActionState, useEffect, useState } from "react";
import styles from "./profileInfoEx.module.css";
import { addPhoneHyphens, getAccessToken, getUserID } from "@/lib/clientFunction";
import SaveButtonEx from "./SaveButtonEx";
import { patchUser } from "@/lib/action";
export interface UserDataProp {
  email: string;
  name: string;
  phone: string;
  address: string;
  extra: {
    address: {
      detailAddress: string;
      mainAddress: string;
      zipCode: string;
    };
  };
}

export default function ProfileInfoEx({ userData }: { userData: UserDataProp | null }) {
  const [crtState, formAction, isLoading] = useActionState(patchUser, null);
  console.log(crtState, isLoading);
  const [userPassword, setUserPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [postalCode, setPostalCode] = useState(userData?.extra.address.zipCode || "");
  const [address, setAddress] = useState(userData?.extra.address.mainAddress || "");
  const [detailAddress, setDetailAddress] = useState(userData?.extra.address.detailAddress || "");

  const [token, setToken] = useState<string>("");
  const [userId, setUserId] = useState<string>("");
  useEffect(() => {
    const accessToken = getAccessToken();
    const id = getUserID();
    setToken(accessToken);
    setUserId(id);
  }, []);

  return (
    <form className={styles.profile_info} action={formAction}>
      <input type="hidden" name="token" defaultValue={token} />
      <input type="hidden" name="user_id" defaultValue={userId} />
      <div className={styles.id_section}>
        <label htmlFor="userId" className={styles.id_label}>
          아이디
        </label>
        <input type="text" id="userId" name="email" defaultValue={userData?.email} readOnly className={styles.input_id} />
      </div>

      <div className={styles.line}></div>

      <div className={styles.name_section}>
        <label htmlFor="userName" className={styles.name_label}>
          성명
        </label>
        <input type="tel" id="userName" name="name" defaultValue={userData?.name} readOnly className={styles.input_name} />
      </div>

      <div className={styles.line}></div>

      <div className={styles.num_section}>
        <label htmlFor="userNumber" className={styles.num_label}>
          연락처
        </label>
        <input type="text" id="userNumber" name="phone" defaultValue={addPhoneHyphens(userData?.phone || "")} readOnly className={styles.input_num} />
      </div>

      <div className={styles.line}></div>

      <div className={styles.pw_section}>
        <div>
          <label htmlFor="userPassword" className={styles.pw_label}>
            비밀번호
          </label>
          <input type="password" id="userPassword" value={userPassword} onChange={(e) => setUserPassword(e.target.value)} className={styles.input_pw} />
        </div>

        <div>
          <label htmlFor="userNewPw" className={styles.new_pw_label}>
            새 비밀번호
          </label>
          <input
            type="password"
            id="userNewPw"
            name="newPassword"
            // defaultValue="1234"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className={styles.input_new_pw}
          />
        </div>

        <div>
          <label htmlFor="userNewPwCheck" className={styles.pw_check_label}>
            새 비밀번호 확인
          </label>
          <input type="password" id="userNewPwCheck" placeholder="비밀번호를 입력해주세요" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className={styles.input_pw_check} />

          {/* 에러 메시지 표시 */}
          {confirmPassword && confirmPassword !== newPassword && <p className={styles.error_message}>비밀번호가 일치하지 않습니다.</p>}
        </div>
      </div>

      <div className={styles.line}></div>

      <div className={styles.address_section}>
        <label htmlFor="postalCode" className={styles.address_label}>
          주소 정보
        </label>

        <div className={styles.address_btn}>
          <input type="text" id="postalCode" name="zipCode" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} className={styles.input_num_address} />

          {/* 검색 버튼 */}
          <button
            type="button"
            className={styles.btn}
            onClick={() => {
              console.log("우편번호 검색");
            }}
          >
            우편번호 검색
          </button>
        </div>

        <input type="text" id="mainAddress" name="mainAddress" value={address} onChange={(e) => setAddress(e.target.value)} className={styles.input_address} />
        <input type="text" id="detailAddress" name="detailAddress" value={detailAddress} onChange={(e) => setDetailAddress(e.target.value)} placeholder="상세주소" className={styles.input_detail_address} />
      </div>

      {/* <div className={styles.btn}>
        <button type="submit" className={styles.save_btn}>
          저장
        </button>
      </div> */}
      <SaveButtonEx />
    </form>
  );
}
