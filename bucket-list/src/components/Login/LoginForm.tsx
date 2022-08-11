import Link from "next/link";
import styles from "../../../styles/Login.module.css";

const LoginForm = () => {
  return (
    <div className={styles.loginContainer}>
      <div className="mb-5 row">
        <div className="row">
          <form className={styles.loginForm}>
            <div><input type="text" className={styles.inputBox} placeholder="이메일을 입력해주세요"/></div>
            <div><input type="password" className={styles.inputBox} placeholder="비밀번호를 입력해주세요"/></div>
            <button type="button" className={"btn btn-primary btn-lg " + styles.loginButton}>로그인</button>
          </form>
        </div>
        <div className="row">
          <div className="col">
            <Link href="/sign-up">
              회원가입
            </Link>
          </div>
          <div className="col">    
            <Link href="/password">
              비밀번호 찾기
            </Link>
          </div>
        </div>
      </div>
      <div className="row">
        구글 로그인
      </div>
    </div>
  );
};

export default LoginForm;