/* eslint-disable prettier/prettier */
import { useRouter } from "next/router";
import { useEffect } from "react";
import styled from "styled-components";

const Container = styled.div<{ display: string }>`
  display: ${props => props.display};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);

  .style-display {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
`;

const Modal = styled.div`
  width: 60rem;
  height: 20rem;
  background-color: white;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  > span {
    display: block;
    font-size: 30px;
  }
`;

const PassModal: React.FC<{ modalControl: boolean }> = ({ modalControl }) => {
  const router = useRouter();

  const goHome = () => {
    setTimeout(() => {
      router.push("/");
    }, 4000);
  };

  useEffect(() => {
    goHome();
  }, [modalControl]);

  return (
    <Container display={modalControl ? "" : "none"}>
      <div className="style-display">
        <Modal>
          <span>등록하신 이메일로 임시 비밀번호를 전송하였습니다.</span>
        </Modal>
      </div>
    </Container>
  );
};

export default PassModal;
