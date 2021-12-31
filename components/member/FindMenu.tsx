import Link from 'next/link';
import React from 'react';

import { LoginStyles } from '../../styles/member-styles';
const { FindArea } = LoginStyles;
const FindMenu = () => {
  return (
    <FindArea>
      <li>
        <Link href="/member/findId">
          <a>아이디 찾기</a>
        </Link>
      </li>
      <li>
        <Link href="/member/findPwd">
          <a>비밀번호 찾기</a>
        </Link>
      </li>
      <li>
        <Link href="/member/join">
          <a>회원가입</a>
        </Link>
      </li>
    </FindArea>
  );
};

export default FindMenu;
