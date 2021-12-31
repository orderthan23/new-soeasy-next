import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';

import { HeaderStyles } from '../../styles/layout-styles';
import SideBar from './SideBar';

const { SoEasyHeader, InputArea, InputSearch, SubMenus } = HeaderStyles;

const Header = () => {
  return (
    <SoEasyHeader>
      <InputArea>
        <SideBar />
        <Link href="/">
          <img src="/images/logo.png" height="40" />
        </Link>
        <InputSearch>
          <input type="text" placeholder="검색어를 입력해보세요." />
          <FontAwesomeIcon
            icon={faSearch}
            className="fa fa-search"
            aria-hidden="true"
          />
        </InputSearch>
      </InputArea>
      <SubMenus id="">
        <Link href="#">
          <a>공간 등록</a>
        </Link>
        <Link href="/member/login">
          <a>로그인</a>
        </Link>
        <Link href="/member/join">
          <a>회원가입</a>
        </Link>
      </SubMenus>
    </SoEasyHeader>
  );
};

export default Header;
