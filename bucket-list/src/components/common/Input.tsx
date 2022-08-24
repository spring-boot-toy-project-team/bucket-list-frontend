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

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  type: string;
  lableText: string;
}

const InputForm: React.FC<Props> = ({ lableText, ...props }) => {
  return (
    <InputBox>
      <label htmlFor="user">{lableText}</label>
      <input {...props} maxLength={30} />
    </InputBox>
  );
};

export default InputForm;
