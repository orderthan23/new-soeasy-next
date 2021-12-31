import Link from 'next/link';
import React from 'react';

import FindMenu from '../../components/member/FindMenu';
import { FindStyle } from '../../styles/member-styles';

const { FormArea, LogoTitle, FindBtn, FindBox, FindTab } = FindStyle;
const FindPwd = () => {
  return (
    <>
      <LogoTitle>
        <img src="/images/logo.png" />
        <h1>Easy to use Share Office Platform</h1>
      </LogoTitle>
      <FindBox>
        <FindTab>
          <Link href="/member/findId">
            <a>아이디찾기</a>
          </Link>
          <Link href="/member/findPwd">
            <a className="active">비밀번호찾기</a>
          </Link>
        </FindTab>
        <form>
          <FormArea>
            <h3>비밀번호는 가입하신 아이디와 이메일로 찾을 수 있습니다.</h3>
            <div className="form-control">
              <label>아이디</label>
              <input type="text" placeholder="아이디를 입력해주세요." />
            </div>
            <div className="form-control">
              <label>이메일</label>
              <input type="email" placeholder="이메일을 입력해주세요." />
            </div>
            <FindMenu />
            <FindBtn>찾기</FindBtn>
          </FormArea>
        </form>
      </FindBox>
    </>
  );
};

export default FindPwd;
