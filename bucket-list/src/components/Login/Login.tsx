import Link from "next/link";
import styled from "styled-components";

const Container = styled.div`
  width: 80%;
  height: 80%;
  background-color: #e5e5e5;
  border-radius: 15px;
  padding: 45px 30px;
`;
const LoginForm = styled.div`
  width: 100%;
  height: 50%;

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
      border: none;
      border-radius: 8px;
      margin-bottom: 20px;
      background-color: #1e90ff;
      color: white;
      font-size: 1.5rem;
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
    font-size: 1rem;
    text-align: left;
    padding-left: 4rem;
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
  return (
    <Container>
      <LoginForm>
        <form className="inputForm">
          <input type="text" placeholder="이메일을 입력해주세요." />
          <input type="password" placeholder="비밀번호를 입력해주세요." />
          <button type="submit">로그인</button>
        </form>
        <div className="loginLink">
          <Link href="/sign-up">
            <a>회원가입</a>
          </Link>
          <Link href="/find-password">
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
