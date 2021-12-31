import styled from 'styled-components';

const LoginBox = styled.div`
  width: 500px;
  margin: 100px auto 0px auto;
  text-align: center;
  padding: 10px 40px 30px 40px;
  border: 1px solid lightgray;

  & h1 {
    font-size: 30px;
    font-weight: 800;
    margin-bottom: 60px;
    margin-top: 20px;
  }
`;

const FormArea = styled.div`
  width: 100%;

  & .form-control {
    margin-bottom: 30px;
    width: 95%;

    & > label {
      display: inline-block;
      font-weight: 700;
      min-width: 100px;
    }

    & > input {
      width: 200px;
      border: 1px solid #c4c4c4;
      border-radius: 5px;
      height: 25px;
      padding-left: 10px;
      padding-right: 10px;
    }
  }
`;

const LoginBtn = styled.button`
  display: block;
  width: 100%;
  color: black;
  border-radius: 5px;
  margin-left: auto;
  margin-right: auto;
  height: 40px;
  background-color: #3db6ae;
  font-size: 16px;
  font-weight: 700;
  border: none;
  margin-top: 50px;

  &:hover {
    color: white;
  }
`;

const FindArea = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: center;
  flex-flow: row nowrap;
  padding: 10px;

  & a {
    text-decoration: none;
    display: inline-block;
    margin-right: 10px;
    margin-left: 10px;
  }

  & > li:not(#findArea > li:nth-of-type(3))::after {
    content: '|';
    float: right;
    display: block;
  }
`;

const LogoTitle = styled.div`
  margin-top: 100px;
  text-align: center;

  & h1 {
    margin-top: 30px;
    font-weight: 800;
    font-size: 20px;
  }
`;

const FindBox = styled.div`
  width: 500px;
  margin: 100px auto 0px auto;
  text-align: center;
  border: 1px solid lightgray;
  padding-bottom: 30px;

  & h1 {
    font-size: 30px;
    font-weight: 800;
    margin-bottom: 60px;
  }

  & h3 {
    margin-bottom: 50px;
  }
`;

const FindTab = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 50px;
  margin-bottom: 30px;

  & a {
    display: block;
    width: 50%;
    background: #c4c4c4;
    line-height: 50px;
    &:hover {
      color: white;
    }
    &.active {
      background: #3db6ae;
    }
  }
`;

const FindBtn = styled.button`
  display: block;
  width: 90%;
  color: black;
  border-radius: 5px;
  margin-left: auto;
  margin-right: auto;
  height: 40px;
  background-color: #3db6ae;
  font-size: 16px;
  font-weight: 700;
  border: none;
  margin-top: 50px;

  &:hover {
    color: white;
  }
`;

//회원가입

const JoInArea = styled.div`
  text-align: center;
  margin-top: 100px;

  & h1 {
    font-size: 30px;
    font-weight: 800;
  }
`;

const JoinForm = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  margin-left: auto;
  margin-right: auto;

  & label {
    font-size: 20px;
    font-weight: 700;
    margin-right: 50px;
    min-width: 120px;
    text-align: left;
  }

  & input {
    width: 100%;
    height: 30px;
    border: 1px solid lightgray;
    border-radius: 5px;
    border-collapse: collapse;

    padding-left: 10px;
  }

  & button {
    display: inline-block;
    border: 1px solid lightgray;
    color: black;
    font-size: 12px;
    background-color: #ffffff;
    border-radius: 5px;
    padding: 1px 2px;
    height: 33px;
    min-width: 60px;
    margin-left: 20px;
  }
`;

const Agreement = styled.div`
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
  margin-bottom: 10px;
  font-weight: 700;
`;

const JoinBtn = styled.button`
  display: block;
  width: 50%;
  color: black;
  border-radius: 5px;
  margin-left: auto;
  margin-right: auto;
  height: 40px;
  background-color: #3db6ae;
  font-size: 16px;
  font-weight: 700;
  border: none;
  margin-top: 50px;
`;

//로그인
export const LoginStyles = {
  FindArea,
  FormArea,
  LoginBox,
  LogoTitle,
  LoginBtn,
};

//아이디&비밀번호 찾기
export const FindStyles = {
  FormArea,
  LogoTitle,
  FindBtn,
  FindBox,
  FindTab,
};

//회원가입
export const JoinStyles = {
  JoInArea,
  JoinForm,
  JoinBtn,
  Agreement,
};
