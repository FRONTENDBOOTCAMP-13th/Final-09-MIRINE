import styles from "./signup.module.css";
import SignUpForm from "../../../components/SignUp/SignUpForm";

export default function SignUpPage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.card}>
          <h2 className={styles.title}>회원가입</h2>
          <SignUpForm />
        </div>
      </div>
    </>
  );
}
