/* eslint-disable prettier/prettier */
import { useRouter } from "next/router";
import styled from "styled-components";
import { dummyData } from "../../../../public/dummyData";
import { AiOutlineStar } from "react-icons/ai";
import { BsHandThumbsUp } from "react-icons/bs";
import Link from "next/link";

const Page = styled.div`
  width: 100%;
  padding: 24px;
`;

const Container = styled.div`
  margin: 0 auto;
  width: 80%;
  padding: 24px;
  overflow: auto;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 1px 12px 2px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  background-color: white;
`;

const TitleContent = styled.div`
  width: 100%;
  height: 55px;
  display: flex;
  justify-content: space-between;
  top: 75px;
  left: 180px;
`;

const Detail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  > a {
    display: block;
    font-size: 1rem;
    font-weight: 200;
  }

  > span {
    font-size: 1rem;
    font-weight: 200;
    padding: 0 12px;
  }
`;

const ImgContent = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: center;

  > img {
    max-width: 860px;
    object-fit: contain;
  }
`;

const UserContent = styled.div`
  width: 100%;
  padding: 12px;
  display: flex;
  flex-direction: column;
`;

const Line = styled.div`
  width: 100%;
  height: 3px;
  background-color: black;
  margin-bottom: 18px;
  margin-top: 13px;
`;

const TextComponent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 3px;
  margin-top: 8px;
`;

const Content = styled.div`
  margin-bottom: 15px;
  color: #666666;
`;

const Tages = styled.div`
  color: #666666;
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

const BucketItem = () => {
  const router = useRouter();
  const itemId = Number(router.query.bucketId);

  const data = dummyData.filter(item => {
    return item.memberId === itemId;
  });

  return (
    <Page>
      <Container>
        <TitleContent>
          <Title>{data[0].title}</Title>
          <Detail>
            <Link href="/main/bucket/2/edit">
              <a>Edit</a>
            </Link>
            <span>Delete</span>
          </Detail>
        </TitleContent>
        <Line></Line>
        <ImgContent>
          <img src={data[0].image} alt={data[0].title} />
        </ImgContent>
        <UserContent>
          <TextComponent>
            <Content>{data[0].content}</Content>
            <Tages>{data[0].tage}</Tages>
            <Line></Line>
          </TextComponent>
          <ButtonComponent>
            <div>
              <AiOutlineStar />
              <span>{data[0].star}</span>
            </div>
            <div>
              <BsHandThumbsUp />
              <span>{data[0].choose}</span>
            </div>
          </ButtonComponent>
        </UserContent>
      </Container>
    </Page>
  );
};

export default BucketItem;
