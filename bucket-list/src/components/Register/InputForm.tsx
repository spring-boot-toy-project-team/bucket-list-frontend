/* eslint-disable @typescript-eslint/no-non-null-assertion */
import styled from "styled-components";

const InputBox = styled.div`
  > label {
    font-weight: bolder;
  }
  > input {
    margin-top: 1rem;
    display: block;
    width: 100%;
    height: 3rem;
    border-radius: 7px;
    background-color: #c4ddff;
    border: none;
    padding: 5px 15px;
    cursor: pointer;
  }
`;

type Props = {
  id: string;
  type: string;
  lableText: string;
  userInfo: string;
  setUserInfo: (text: string) => void;
  checkFuc: (text: string) => void;
};

const InputForm: React.FC<Props> = ({
  id,
  type,
  lableText,
  userInfo,
  setUserInfo,
  checkFuc,
}) => {
  //* onChange Fuc
  const userInfoHanlder = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo(event.target.value);
    checkFuc(event.target.value);
  };

  return (
    <InputBox>
      <label htmlFor="user">{lableText}</label>
      <input type={type} id={id} onChange={userInfoHanlder} maxLength={30} />
    </InputBox>
  );
};

export default InputForm;
