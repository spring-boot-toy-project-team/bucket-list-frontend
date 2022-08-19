import styled from "styled-components";
import InputForm from "../../components/Register/InputForm";

const Container = styled.div`
  align-items: center;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 2rem 0;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 40%;

  > button {
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
    margin-bottom: 2rem;
  }
`;

const FindPassword = () => {
  return (
    <Container>
      <Form>
        <InputForm type="text" lableText="이메일을 입력해주세요." />
        <span className="warningMaring">이메일을 입력해주세요.</span>

        <InputForm type="text" lableText="닉네임을 입력해주세요." />
        <span className="warningMaring">닉네임을 입력해주세요.</span>

        <button>비밀번호 찾기</button>
      </Form>
    </Container>
  );
};

export default FindPassword;
