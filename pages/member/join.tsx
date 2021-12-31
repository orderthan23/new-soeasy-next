import React from 'react';

import { JoinStyles } from '../../styles/member-styles';
const { JoInArea, JoinBtn, JoinForm, Agreement } = JoinStyles;

const Join = () => {
  return (
    <form>
      <JoInArea>
        <h1>회원 가입</h1>
        <JoinForm>
          <label>아이디</label>
          <input type="text" placeholder="아이디를 입력해주세요." />
          <button>중복 확인</button>
        </JoinForm>
        <JoinForm>
          <label>닉네임</label>
          <input type="text" placeholder="닉네임을 입력해주세요." />
          <button>중복 확인</button>
        </JoinForm>
        <JoinForm>
          <label>이름</label>
          <input type="text" placeholder="이름을 입력해주세요." />
        </JoinForm>
        <JoinForm>
          <label>비밀번호</label>
          <input type="password" placeholder="비밀번호를 입력해주세요." />
        </JoinForm>
        <JoinForm>
          <label>비밀번호 확인</label>
          <input
            type="password"
            placeholder="비밀번호를 한번 더  입력해주세요."
          />
        </JoinForm>
        <JoinForm>
          <label>연락처</label>
          <input type="tel" placeholder="연락처를 입력해주세요." />
          <button>본인 인증</button>
        </JoinForm>
        <JoinForm>
          <label>이메일</label>
          <input type="email" placeholder="이메일을 입력해주세요." />
        </JoinForm>
        <Agreement>
          <input type="checkbox" />
          <label>서비스 이용약관(필수)</label>
        </Agreement>
        <Agreement>
          <input type="checkbox" />
          <label>개인정보 처리 방침(필수)</label>
        </Agreement>
        <Agreement>
          <input type="checkbox" />
          <label>위 약관에 모두 동의 합니다.</label>
        </Agreement>
      </JoInArea>
      <JoinBtn>회원가입</JoinBtn>
    </form>
  );
};

export default Join;
