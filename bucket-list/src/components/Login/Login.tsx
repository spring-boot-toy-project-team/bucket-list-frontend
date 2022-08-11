import BucketListImage from "./BucketListImage";
import LoginForm from "./LoginForm";
import styles from "../../../styles/Login.module.css";

const Login = () => {
  return (
    <div className={styles.container}>
      <BucketListImage />
      <LoginForm />
    </div>
  );
};

export default Login;