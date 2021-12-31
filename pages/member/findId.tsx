import Link from 'next/link';
import React from 'react';

import FindMenu from '../../components/member/FindMenu';
import { FindStyles } from '../../styles/member-styles';

const { FormArea, LogoTitle, FindBtn, FindBox, FindTab } = FindStyles;
const FindId = () => {
  return (
    <>
      <LogoTitle>
        <img src="/images/logo.png" />
        <h1>Easy to use Share Office Platform</h1>
      </LogoTitle>
      <FindBox>
        <FindTab>
          <Link href="/member/findId">
            <a className="active">아이디찾기</a>
          </Link>
          <Link href="/member/findPwd">
            <a>비밀번호찾기</a>
          </Link>
        </FindTab>
        <form>
          <FormArea>
            <h3>아이디는 가입하신 이름과 이메일로 찾을 수 있습니다.</h3>
            <div className="form-control">
              <label>이름</label>
              <input
                type="text"
                placeholder="이름을 입력해주세요."
                maxLength={15}
              />
            </div>
            <div className="form-control">
              <label>이메일</label>
              <input
                type="email"
                placeholder="이메일을 입력해주세요."
                maxLength={40}
              />
            </div>
            <FindMenu />
            <FindBtn>찾기</FindBtn>
          </FormArea>
        </form>
      </FindBox>
    </>
  );
};

export default FindId;
