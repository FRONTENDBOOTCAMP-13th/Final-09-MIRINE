import styles from "./login.module.css";

export default function Login() {
  return (
    <div className={styles.container}>
      {/* 로그인 박스 */}
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

          <button type="submit" className={styles.loginButton}>
            로그인
          </button>
          <button type="button" className={styles.signupButton}>
            회원가입
          </button>
        </form>

        <div className={styles.easyLogin}>
          <h4>간편 로그인</h4>
          <p>카카오 네이버 구글?</p>
        </div>
      </div>
    </div>
  );
}
