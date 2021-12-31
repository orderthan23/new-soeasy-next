import React from 'react';

import FindMenu from '../../components/member/FindMenu';
import { LoginStyles } from '../../styles/member-styles';
const { FormArea, LoginBtn, LoginBox, LogoTitle } = LoginStyles;

const Login = () => {
  return (
    <>
      <LogoTitle>
        <img src="/images/logo.png" />
        <h1>Easy to use Share Office Platform</h1>
      </LogoTitle>
      <LoginBox>
        <h1>로그인</h1>
        <form>
          <FormArea>
            <div className="form-control">
              <label>아이디</label>
              <input type="text" placeholder="아이디를 입력해주세요." />
            </div>
            <div className="form-control">
              <label>비밀번호</label>
              <input type="password" placeholder="비밀번호를 입력해주세요." />
            </div>
            <FindMenu />
            <LoginBtn>로그인</LoginBtn>
          </FormArea>
        </form>
      </LoginBox>
    </>
  );
};

export default Login;
