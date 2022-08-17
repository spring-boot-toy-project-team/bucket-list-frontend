import Link from "next/link";
import { SyntheticEvent, useState } from "react";
import styles from "../../../styles/Login.module.css";
import loginApi from "../../pages/api/users/login";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const submit =async (e: SyntheticEvent) => {
    e.preventDefault();
    const response = await loginApi({email, password});
    console.log(response);
  }

  return (
    <div className={styles.loginContainer}>
      <div className="mb-5 row">
        <div className="row">
          <form className={styles.loginForm} onSubmit={submit}>
            <div>
              <input
                type="text"
                className={styles.inputBox}
                name="email"
                onChange={e => setEmail(e.target.value)}
                placeholder="이메일을 입력해주세요"
              />
            </div>
            <div>
              <input
                type="password"
                className={styles.inputBox}
                name="password"
                onChange={e => setPassword(e.target.value)}
                placeholder="비밀번호를 입력해주세요"
              />
            </div>
            <button
              type="submit"
              className={"btn btn-primary btn-lg " + styles.loginButton}
            >
              로그인
            </button>
          </form>
        </div>
        <div className="row">
          <div className="col">
            <Link href="/sign-up">회원가입</Link>
          </div>
          <div className="col">
            <Link href="/password">비밀번호 찾기</Link>
          </div>
        </div>
      </div>
      <div className="row">구글 로그인</div>
    </div>
  );
};

export default LoginForm;
