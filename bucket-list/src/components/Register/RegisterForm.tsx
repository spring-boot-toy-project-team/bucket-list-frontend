import styled from "styled-components";
import InputForm from "./InputForm";

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

  > span {
    display: block;
    margin-top: 5px;
    color: red;
    padding-left: 10px;
  }

  .warningMaring {
    margin-bottom: 2rem;
  }
`;
// ! 컨테인이 가운데로 올 수 있게 만들기
const RegisterForm = () => {
  return (
    <Container>
      <Form>
        <InputForm type="text" lableText="이메일을 입력해주세요." />
        <span>이메일이 입력되지 않았습니다.</span>
        <span className="warningMaring">이미 등록된 이메일 입니다.</span>

        <InputForm type="text" lableText="닉네임을 입력해주세요." />
        <span>닉네임이 입력되지 않았습니다.</span>
        <span className="warningMaring">이미 등록된 닉네임 입니다.</span>

        <InputForm type="password" lableText="비밀번호을 입력해주세요." />
        <span className="warningMaring">비밀번호가 입력되지 않았습니다.</span>

        <InputForm type="password" lableText="비밀번호를 다시 입력해주세요." />
        <span className="warningMaring">비밀번호가 일치하지 않습니다.</span>

        <button className="form-button">가입하기</button>
      </Form>
    </Container>
  );
};

export default RegisterForm;
