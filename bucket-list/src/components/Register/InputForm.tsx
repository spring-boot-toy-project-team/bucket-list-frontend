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

interface Props {
  type: string;
  lableText: string;
}

const InputForm: React.FC<Props> = ({ type, lableText }) => {
  return (
    <InputBox>
      <label>{lableText}</label>
      <input type={type} />
    </InputBox>
  );
};

export default InputForm;
