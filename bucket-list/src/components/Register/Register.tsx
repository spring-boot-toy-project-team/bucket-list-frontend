import TextInputBox from "./TextInputBox";
import TextWithButton from "./TextWithButton";
import styles from "../../../styles/Register.module.css";

const dataWithButton = [
  {
    label: "이메일을 입력하세요",
    name: "email",
  },
];

const dataWithText = [
  {
    label: "사용할 닉네임을 입력해주세요",
    name: "nickName",
    password: false,
  },
  {
    label: "비밀번호를 입력해주세요",
    name: "passowrd1",
    password: true,
  },
  {
    label: "비밀번호를 다시 입력해주세요",
    name: "passowrd2",
    password: true,
  },
];

const Register = () => {
  return (
    <div className={styles.container}>
      {Array.from({ length: 1 }, (_, i) => (
        <TextWithButton
          label={dataWithButton[i].label}
          name={dataWithButton[i].name}
        />
      ))}
      {Array.from({ length: 3 }, (_, i) => (
        <TextInputBox
          label={dataWithText[i].label}
          name={dataWithText[i].name}
          password={dataWithText[i].password}
        />
      ))}
      <button
        type="button"
        className={"btn btn-primary btn-lg " + styles.signUpButton}
      >
        가입하기
      </button>
    </div>
  );
};

export default Register;
