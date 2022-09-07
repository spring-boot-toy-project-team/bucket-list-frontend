/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import styled from "styled-components";
import ListItem from "../common/ListItem";
import { dummyData } from "../../../public/dummyData";

const Container = styled.div`
  width: 100%;
  height: 92%;
  border: 3px solid red;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  width: 90%;
  height: 90%;
  border: 3px solid black;
  padding: 30px;
  display: flex;
  gap: 30px 5%;
  flex-wrap: wrap;
  overflow: auto;
`;

interface data {
  memberId: number;
  title: string;
  image: string;
  content: string;
  tage: string[];
  star: number;
  choose: number;
}
[];

const EveryList = () => {
  return (
    <Container>
      <Content>
        {dummyData.map((item, idx) => {
          return (
            <ListItem
              key={item.memberId}
              memberId={item.memberId}
              title={item.title}
              image={item.image}
              content={item.content}
              tage={item.tage}
              star={item.star}
              choose={item.choose}
            />
          );
        })}
      </Content>
    </Container>
  );
};

export default EveryList;
