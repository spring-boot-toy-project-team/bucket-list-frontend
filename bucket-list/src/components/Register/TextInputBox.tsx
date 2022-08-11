import styles from "../../../styles/Register.module.css";

interface Props {
  label: string;
  name: string;
  password: boolean;
}

const TextInputBox: React.FC<Props> = ({ label, name, password }) => {
  return (
    <div className="mb-3">
      <div className="row">
        <label className={styles.label}>{label}</label>
      </div>
      <div className="row">
        <div className="col">
          {password && (
            <input type="password" className={styles.inputBox} name={name} />
          )}
          {!password && <input className={styles.inputBox} name={name} />}
        </div>
      </div>
    </div>
  );
};

export default TextInputBox;
