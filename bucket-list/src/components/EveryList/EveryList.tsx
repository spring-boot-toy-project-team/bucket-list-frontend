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
  cursor: pointer;
`;

const Content = styled.div`
  width: 91%;
  height: 91%;
  padding: 30px;
  display: flex;
  gap: 30px 5%;
  flex-wrap: wrap;
  overflow: auto;
  background-color: #ddf3f5;
  border-radius: 8px;
`;

const EveryList = () => {
  return (
    <Container>
      <Content>
        {dummyData.map((item, idx) => {
          return (
            <ListItem
              key={item.memberId}
              id={item.memberId}
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
