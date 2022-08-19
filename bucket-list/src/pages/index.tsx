import type { NextPage } from "next";
import styled from "styled-components";
import Login from "../components/Login/Login";
import imgURL from "../../public/image/BucketList.png";
import Image from "next/image";

const Container = styled.div`
  height: 92vh;
  width: 100vw;
  display: flex;
`;

const Img = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginForm = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Home: NextPage = () => {
  return (
    <Container>
      <Img>
        <Image className="bucketImg" src={imgURL} alt="버켓리스트" />
      </Img>
      <LoginForm>
        <Login />
      </LoginForm>
    </Container>
  );
};

export default Home;
