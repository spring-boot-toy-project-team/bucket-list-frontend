/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
import Link from "next/link";
import { useEffect, useRef } from "react";
import styled from "styled-components";

const Menu = styled.div<{ display: string }>`
  width: 13rem;
  height: 10rem;
  position: absolute;
  right: 30px;
  top: 60px;
  border: none;
  border-radius: 15px;
  background-color: #c4ddff;
  display: ${props => props.display};

  > a {
    width: 100%;
    height: 33%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .menu-boo {
    border-bottom: 2px solid #fff;
  }
`;

interface Props {
  menu: boolean;
  setMenu(menu: boolean): void;
}

const HeadMenu: React.FC<Props> = ({ menu, setMenu }) => {
  const menuRef = useRef(null);

  //* 메뉴 외부 클릭했을 때 메뉴 닫히기
  const useOutsideAlerter = (ref: any) => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setMenu(false);
      }
    };

    useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    });
  };

  useOutsideAlerter(menuRef);

  const menuHandler = () => {
    setMenu(!menu);
  };

  return (
    <Menu ref={menuRef} display={menu ? "" : "none"}>
      <Link href="/profile">
        <a onClick={menuHandler} className="menu-boo">
          프로필
        </a>
      </Link>
      <Link href="profile">
        <a onClick={menuHandler} className="menu-boo">
          버킷그룹 조회
        </a>
      </Link>
      <Link href="profile">
        <a onClick={menuHandler}>내 인증글 조회</a>
      </Link>
    </Menu>
  );
};

export default HeadMenu;
