/* eslint-disable prefer-const */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { signupApi } from "../../pages/api/users/login";
import InputForm from "../common/Input";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
`;

const Form = styled.form`
  height: 100%;
  width: 40%;

  .form-button {
    width: 100%;
    height: 4rem;
    background-color: #2d98da;
    border: none;
    border-radius: 7px;
    font-size: 1.5rem;
    color: white;
    cursor: pointer;
  }
`;

const Validation = styled.span`
  display: block;
  margin-top: 5px;
  color: red;
  padding-left: 10px;
  margin-bottom: 2rem;
`;

//? 이메일은 입력할 때다 api를 전송해서 데이터를 받아야 한다.
//* span은 하나로 구성하고 조건에 따라서 안에 들어가는 텍스트 내용이 변하도록 만들기

interface UserEx {
  email: string;
  password: string;
  nickName: string;
  tel: string;
}

const RegisterForm = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const [validEmail, setValidEmail] = useState("");
  const [validNickname, setValidNickname] = useState("");
  const [validPassword1, setValidPassword1] = useState("");
  const [validPassword2, setValidPassword2] = useState("");

  const userEx: UserEx = {
    email: "hgd@gmail.com",
    password: "1234",
    nickName: "hgd",
    tel: "010-1234-5678",
  };

  //* 버튼 클릭시 제출되는 form 핸들러
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const signupBody: UserEx = {
      email,
      password: password2,
      nickName: nickname,
      tel: "010-1234-5678",
    };

    try {
      const { data } = await signupApi(signupBody);
      console.log(data);
      router.push("/main");
    } catch (e) {
      console.log(e);
    }

    if (email.length === 0) {
      setValidEmail("이메일은 필수정보 입니다.");
    }
    if (nickname.length === 0) {
      setValidNickname("닉네임은 필수정보 입니다.");
    }
    if (password1.length === 0) {
      setValidPassword1("비밀번호는 필수정보 입니다.");
    }
  };

  //* validation infor check
  const emailCheck = (text: string) => {
    if (text === userEx.email) {
      setValidEmail("사용 중인 이메일 주소 입니다.");
    }
    if (text.length === 0) {
      setValidEmail("이메일은 필수정보 입니다.");
    }
    if (text.length > 0) {
      setValidEmail("");
    }
  };

  const nicknameCheck = (text: string) => {
    if (text.length < 3) {
      setValidNickname("닉네임은 3글자 이상 되어야 합니다.");
    }
    if (text.length > 2) {
      setValidNickname("");
    }
    if (text.length === 0) {
      setValidNickname("닉네임은 필수정보 입니다.");
    }
    if (text === userEx.nickName) {
      setValidNickname("사용 중인 닉네임 입니다.");
    }
  };

  const passwordCheck1 = (num: string) => {
    if (num.length < 5 || num.length > 30) {
      setValidPassword1("5~30글자 이내로 입력해 주십시오.");
    } else if (num.length === 0) {
      setValidPassword1("비밀번호는 필수정보 입니다.");
    } else {
      setValidPassword1("");
    }
  };

  const passwordCheck2 = (num: string) => {
    if (num !== password1) {
      setValidPassword2("비밀번호가 일치하지 않습니다.");
    }
    if (num === password1) {
      setValidPassword2("");
    }
  };

  //* input의 onChange Fuc
  const onChangeEmail = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
      emailCheck(event.target.value);
    },
    []
  );
  const onChangeNickname = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setNickname(event.target.value);
      nicknameCheck(event.target.value);
    },
    []
  );
  const onChangePassword1 = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setPassword1(event.target.value);
      passwordCheck1(event.target.value);
    },
    []
  );
  const onChangePassword2 = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setPassword2(event.target.value);
    },
    []
  );

  useEffect(() => {
    passwordCheck2(password2);
  }, [password2]);

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <InputForm
          id="userEmail"
          type="email"
          lableText="이메일을 입력해주세요."
          onChange={onChangeEmail}
          value={email}
        />
        <Validation>{validEmail}</Validation>
        {/* 이메일 주소가 올바르지 않습니다. - onChange*/}
        {/* 사용 중인 이메일 주소 입니다. - onChange*/}
        {/* 이메일은 필수정보 입니다. - onSubmit */}

        <InputForm
          id="userNickname"
          type="text"
          lableText="닉네임을 입력해주세요."
          onChange={onChangeNickname}
          value={nickname}
        />
        <Validation>{validNickname}</Validation>
        {/* 닉네임은 5글자 이상 되어야 합니다 - onChange*/}
        {/* 사용 중인 닉네임 입니다. - onChange*/}
        {/* 넥네임은 필수정보 입니다 - onSubmit */}

        <InputForm
          id="userPassword1"
          type="password"
          lableText="비밀번호을 입력해주세요."
          onChange={onChangePassword1}
          value={password1}
        />
        <Validation>{validPassword1}</Validation>
        {/* 5~30글자 이내로 입력해 주십시오 - onChange*/}
        {/* 비밀번호는 필수정보 입니다. - onSubmit */}

        <InputForm
          id="userPassword2"
          type="password"
          lableText="비밀번호를 다시 입력해주세요."
          onChange={onChangePassword2}
          value={password2}
        />
        <Validation>{validPassword2}</Validation>
        {/* 비밀번호가 일치하지 않습니다. - onChange */}

        <button type="submit" className="form-button">
          가입하기
        </button>
      </Form>
    </Container>
  );
};

export default RegisterForm;
