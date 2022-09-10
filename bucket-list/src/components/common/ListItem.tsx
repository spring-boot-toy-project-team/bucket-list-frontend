import styled from "styled-components";
import { AiOutlineStar } from "react-icons/ai";
import { BsHandThumbsUp } from "react-icons/bs";
import { useRouter } from "next/router";

const Container = styled.div`
  width: 30%;
  padding: 12px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 1px 12px 2px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  border-radius: 8px;
  background-color: white;
`;

const ImgContent = styled.div`
  width: 100%;
  height: 60%;
  border: 1px solid blue;

  > img {
    width: 100%;
    object-fit: cover;
    height: 100%;
  }
`;

const UserContent = styled.div`
  width: 100%;
  padding: 12px;
`;

const Line = styled.div`
  width: 100%;
  height: 3px;
  background-color: black;
  margin-top: 9px;
`;

const TextComponent = styled.div`
  width: 100%;
  display: flex;
`;

const Text = styled.div`
  width: 70%;
`;

const Title = styled.h1`
  font-size: 1.3rem;
`;

const Tages = styled.div``;

const Profile = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    width: 70px;
    height: 70px;
    background-color: #c4c4c4;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const ButtonComponent = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: flex-start;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    margin-top: 18px;

    > span {
      margin-left: 3px;
    }
  }
`;

interface propsData {
  key: number;
  id: number;
  memberId: number;
  title: string;
  image: string;
  content: string;
  tage: string[];
  star: number;
  choose: number;
}
[];

const ListItem = (props: propsData) => {
  const router = useRouter();
  const onClickHandler = () => {
    router.push(`/main/bucket/${props.id}`);
  };

  return (
    <Container onClick={onClickHandler}>
      <ImgContent>
        <img src={props.image} />
      </ImgContent>
      <Line></Line>
      <UserContent>
        <TextComponent>
          <Text>
            <Title>{props.title}</Title>
            <Tages>{props.tage}</Tages>
          </Text>
          <Profile>
            <div>프로필</div>
          </Profile>
        </TextComponent>
        <ButtonComponent>
          <div>
            <AiOutlineStar />
            <span>{props.star}</span>
          </div>
          <div>
            <BsHandThumbsUp />
            <span>{props.choose}</span>
          </div>
        </ButtonComponent>
      </UserContent>
    </Container>
  );
};

export default ListItem;
