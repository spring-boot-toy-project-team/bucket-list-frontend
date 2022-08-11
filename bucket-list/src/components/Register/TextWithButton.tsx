import styles from "../../../styles/Register.module.css";

interface Props {
  label: string,
  name: string,
}

const TextWithButton : React.FC<Props> = ({label, name}) => {
  return (
    <div className="mb-3">
      <div className="row">
        <label className={styles.label}>{label}</label>
      </div>
      <div className="row">
        <div className="col">
          <input className={styles.inputBox} name={name}></input>
        </div>
        <div className="col">
        <button type="button" className={"btn btn-primary btn-lg " + styles.checkButton}>중복 확인</button>
        </div>
      </div>
    </div>
  );
};

export default TextWithButton;