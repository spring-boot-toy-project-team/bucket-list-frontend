import styles from "../../../styles/Header.module.css";

interface Props {
  isLogin: boolean;
}

const Header: React.FC<Props> = ({ isLogin }) => {
  if (isLogin) {
    return (
      <div className={styles.container}>
        <div className={styles.title}>BUCKET LIST</div>
        <div className={styles.search}>SEARCH</div>
      </div>
    );
  } else {
    return (
      <div className={styles.container}>
        <div className={styles.title}>BUCKET LIST</div>
      </div>
    );
  }
};

export default Header;
