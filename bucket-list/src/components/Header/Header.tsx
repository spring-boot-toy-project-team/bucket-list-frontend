import styled from "styled-components";

const HeadContainer = styled.div`
  background-color: #001d6e;
  height: 8vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  margin-left: 2rem;
  > span {
    font-size: 2rem;
    color: white;
  }
`;

const SearchLogin = styled.div`
  display: flex;
  align-items: center;
  margin-right: 2rem;
  > input {
    width: 20rem;
    height: 2.3rem;
    border: none;
    border-radius: 30px;
    margin-right: 2rem;
    padding: 5px 15px;
  }

  > input:focus {
    outline: none;
  }

  > div {
    background-color: gray;
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    text-align: center;
    color: white;
    padding-left: 7px;
    border-radius: 100%;
    font-size: 13px;
  }
`;

const Header = () => {
  return (
    <HeadContainer>
      <Logo>
        <span>Buket List</span>
      </Logo>
      <SearchLogin>
        <input type="text" />
        <div>프로필</div>
      </SearchLogin>
    </HeadContainer>
  );

  // if (isLogin) {
  //   return (
  //     <div className={styles.container}>
  //       <div className={styles.title}>BUCKET LIST</div>
  //       <div className={styles.search}>SEARCH</div>
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div className={styles.container}>
  //       <div className={styles.title}>BUCKET LIST</div>
  //     </div>
  //   );
  // }
};

export default Header;
