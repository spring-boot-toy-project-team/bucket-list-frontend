import { useState } from "react";
import styled from "styled-components";
import PassModal from "../../components/PasswordModal/passModal";
import InputForm from "../../components/common/Input";

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
  const [modalControl, setModalContorl] = useState(false);
  const [findEmail, setFindEmail] = useState("");

  const submitHandlar = () => {
    setModalContorl(!modalControl);
  };

  return (
    <Container>
      <PassModal modalControl={modalControl} />
      <Form>
        <InputForm
          id="text"
          type="text"
          lableText="이메일을 입력해주세요."
          setUserInfo={setFindEmail}
        />
        <span className="warningMaring">이메일을 입력해주세요.</span>
        <span className="warningMaring">가입된 이메일이 아닙니다.</span>

        <button onClick={submitHandlar}>비밀번호 찾기</button>
      </Form>
    </Container>
  );
};

export default FindPassword;
