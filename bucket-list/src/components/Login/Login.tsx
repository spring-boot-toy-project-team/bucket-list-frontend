/* eslint-disable @typescript-eslint/no-non-null-assertion */
import Link from "next/link";
import React, { useRef } from "react";
import styled from "styled-components";
import loginApi from "../../pages/api/users/login";

const Container = styled.div`
  width: 80%;
  height: 80%;
  border-radius: 15px;
  padding: 45px 30px;
`;
const LoginForm = styled.div`
  width: 100%;
  height: 50%;
  margin-bottom: 2rem;

  .inputForm {
    width: 100%;

    > input {
      display: block;
      width: 100%;
      height: 3rem;
      margin-bottom: 20px;
      padding: 5px 10px;
      font-size: 18px;
      border-top: none;
      border-bottom: 1px solid #dfe4ea;
      border-left: none;
      border-right: none;
      cursor: pointer;
      margin-bottom: 2rem;
    }
    > input:hover {
      border-bottom: 1px solid #a4b0be;
    }
    > input:focus {
      outline: none;
      border-bottom: 2px solid #337de9;
    }
    > button {
      width: 100%;
      height: 3.5rem;
      border: 3px solid #1e90ff;
      border-radius: 8px;
      margin-bottom: 2rem;
      color: black;
      font-size: 1.5rem;
      font-weight: bold;
      cursor: pointer;
      background-color: white;
    }
    > button:hover {
      background-color: #1e90ff;
    }
  }

  .loginLink {
    display: flex;
    justify-content: space-around;
  }
`;
const OauthLogin = styled.div`
  width: 100%;
  height: 50%;

  .to-button {
    width: 100%;
    height: 3.5rem;
    margin-bottom: 20px;
    border-radius: 10px;
    text-align: left;
    margin-bottom: 2rem;
    cursor: pointer;
    text-align: center;
    font-size: 1rem;
    font-weight: bold;
  }

  .to-google {
    background-color: white;
    border: 3px solid #a5b1c2;
  }
  .to-google:hover {
    background-color: #a5b1c2;
  }
  .to-kakao {
    background-color: white;
    border: 3px solid #fff200;
  }
  .to-kakao:hover {
    background-color: #fff200;
  }
`;

const Login = () => {
  const idRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();

    const userId = idRef.current!.value;
    const userPassword = passwordRef.current!.value;

    const loginData = {email: userId, password: userPassword};
    
    await loginApi(loginData);
    console.log(userId, userPassword); // input 안의 값들 처리

    if (userId !== undefined && userPassword !== undefined) {
      idRef.current!.value = "";
      passwordRef.current!.value = "";
    }
  };

  return (
    <Container>
      <LoginForm>
        <form onSubmit={submitHandler} className="inputForm">
          <input ref={idRef} type="text" placeholder="이메일을 입력해주세요." />
          <input
            ref={passwordRef}
            type="password"
            placeholder="비밀번호를 입력해주세요."
          />
          <button type="submit">로그인</button>
        </form>
        <div className="loginLink">
          <Link href="/signup">
            <a>회원가입</a>
          </Link>
          <Link href="/password">
            <a>비밀번호 찾기</a>
          </Link>
        </div>
      </LoginForm>
      <OauthLogin>
        <button className="to-button to-google">구글 계정으로 시작하기</button>
        <button className="to-button to-kakao">카카오 계정으로 시작하기</button>
      </OauthLogin>
    </Container>
  );
};

export default Login;
