'use client'
import { useState } from "react";
import styles from "./profileInfo.module.css";
import SaveButton from "@/components/MypageAside/SaveButton/SaveButton";

export default function ProfileInfo(){
  const [userPassword, setUserPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [postalCode, setPostalCode] = useState('');
  const [address, setAddress] = useState('');
  const [detailAddress, setDetailAddress] = useState('');

  //에러 상태
  const [passwordError, setPasswordError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSave = async () => {
    setPasswordError('');

    if(newPassword && !userPassword){
      setPasswordError('기존 비밀번호를 입력해주세요');
      return;
    }
    if (newPassword && newPassword.length < 6) {
      setPasswordError('비밀번호는 6자 이상 입력해주세요.');
      return;
    }
    if (newPassword && newPassword !== confirmPassword) {
      setPasswordError('새 비밀번호가 일치하지 않습니다.');
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
      detailAddress: detailAddress
    };

    console.log('저장할 데이터:', profileData);

    // API 호출 시뮬레이션
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // 성공 시 비밀번호 필드 초기화
      setUserPassword('');
      setNewPassword('');
      setConfirmPassword('');

    } catch (error) {
      console.error('저장 오류:', error);
      setPasswordError('저장 중 오류가 발생했습니다.');
    } finally {
      setIsLoading(false);
    }
  }


  return (
  <div className={styles.container}>
    <form className={styles.profile_info}>
      <div className={styles.id_section}>
        <label htmlFor="userId" className={styles.id_label}>아이디</label>
        <input 
          type="text" 
          id="userId" 
          value="mirine123"
          readOnly
          className={styles.input_id} 
        />
      </div>

      <div className={styles.line}></div>

      <div className={styles.name_section}>
        <label htmlFor="userName" className={styles.name_label}>성명</label>
        <input 
          type="tel" 
          id="userName" 
          value="홍*동" 
          readOnly
          className={styles.input_name} />
      </div>

      <div className={styles.line}></div>

      <div className={styles.num_section}>
        <label htmlFor="userNumber" className={styles.num_label}>연락처</label>
        <input
          type="text" 
          id="userNumber" 
          value="010-****-1234"
          readOnly
          className={styles.input_num} 
        />
      </div>

      <div className={styles.line}></div>

      <div className={styles.pw_section}>
        <div>
          <label htmlFor="userPassword" className={styles.pw_label}>비밀번호</label>
          <input
            type="password" 
            id="userPassword" 
            value={userPassword}
            onChange={(e) => {
              setUserPassword(e.target.value);
              if (passwordError) setPasswordError('');
            }}
            className={styles.input_pw}
          />
        </div>

        <div>
          <label htmlFor="userNewPw" className={styles.new_pw_label}>새 비밀번호</label>
          <input
            type="password"
            id="userNewPw" 
            // defaultValue="1234"
            value={newPassword}
            onChange={(e) => {
              setNewPassword(e.target.value);
              if (passwordError) setPasswordError('');
            }}
            className={styles.input_new_pw}
          />
        </div>

        <div>
          <label htmlFor="userNewPwCheck" className={styles.pw_check_label}>새 비밀번호 확인</label>
          <input 
            type="password" 
            id="userNewPwCheck" 
            placeholder="비밀번호를 입력해주세요"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              if (passwordError) setPasswordError('');
            }}
            className={styles.input_pw_check}
          />

          {/* 에러 메시지 표시 */}
          {confirmPassword && confirmPassword !== newPassword && (
          <p className={styles.error_message}>비밀번호가 일치하지 않습니다.</p>
          )}
        </div>
        
        {/* 저장 시 에러 메시지 */}
        {passwordError && (
            <p className={styles.error_message}>{passwordError}</p>
        )}
      </div>

      <div className={styles.line}></div>

      <div className={styles.address_section}>
        <label htmlFor="postalCode" className={styles.address_label}>주소 정보</label>
        
        <div className={styles.address_btn}>
          <input
            type="text" 
            id="postalCode" 
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            className={styles.input_num_address}
            />

          {/* 검색 버튼 */}
          <button 
            type="button"
            className={styles.btn}
            onClick={() => {console.log('우편번호 검색')}}
            >
            우편번호 검색
          </button>
        </div>
        
        <input
          type="text" 
          id="mainAddress" 
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className={styles.input_address}
        />
        <input
          type="text" 
          id="detailAddress" 
          value={detailAddress}
          onChange={(e) => setDetailAddress(e.target.value)}
          placeholder="상세주소"
          className={styles.input_detail_address}
        />
      </div>
    </form>
    
    <SaveButton 
      onClickSave={handleSave} disabled={isLoading} />
  </div>
  
  )
}