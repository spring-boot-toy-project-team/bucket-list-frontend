import { useCallback, useState } from "react";
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
`;
const Validation = styled.span`
  display: block;
  margin-top: 5px;
  color: red;
  padding-left: 10px;
  margin-bottom: 2rem;
`;

interface UserEx {
  email: string;
  password: string;
  nickName: string;
  tel: string;
}

const FindPassword = () => {
  const [modalControl, setModalContorl] = useState(false);
  const [findEmail, setFindEmail] = useState("");
  const [validEmail, setValidEmail] = useState("");

  const userEx: UserEx = {
    email: "hgd@gmail.com",
    password: "1234",
    nickName: "hgd",
    tel: "010-1234-5678",
  };

  const submitHandlar = () => {
    if (findEmail !== userEx.email) {
      setValidEmail("입력하신 이메일을 찾을 수가 없습니다.");
    }
    if (findEmail === userEx.email) {
      setModalContorl(!modalControl);
    }
  };

  const checkEmail = (text: string) => {
    if (text.length === 0) {
      setValidEmail("이메일은 필수정보 입니다.");
    }
    if (text.length > 1) {
      setValidEmail("");
    }
  };

  const onChangeEmail = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setFindEmail(event.target.value);
      checkEmail(event.target.value);
    },
    []
  );

  return (
    <Container>
      <PassModal modalControl={modalControl} />
      <Form>
        <InputForm
          id="text"
          type="text"
          lableText="이메일을 입력해주세요."
          onChange={onChangeEmail}
        />
        <Validation>{validEmail}</Validation>

        <button onClick={submitHandlar}>비밀번호 찾기</button>
      </Form>
    </Container>
  );
};

export default FindPassword;
