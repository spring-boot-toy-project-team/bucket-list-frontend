import type { NextPage } from "next";
import styled from "styled-components";
import Login from "../components/Login/Login";
import imgURL from "../../public/image/BucketList.png";
import Image from "next/image";
import axios from "axios";
import loginApi from "./api/users/login";

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
  console.log(loginApi());
  const url = `https://api.openweathermap.org/data/2.5/weather?q=seoul&appid=bd278d7ccd0737ea15f7e000bf917678&lang=kr`;

  // fetch(url, { method: "GET" })
  //   .then(res => res.json())
  //   .then(res => console.log(res));
  // axios
  //   .get(url)
  //   .then(res => res.data)
  //   .then(res => console.log(res));
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
