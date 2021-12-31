import React from 'react';
import styled from 'styled-components';

const SoEasyHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  border-bottom: 1px solid lightgray;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  z-index: 2;
  background-color: #ffffff;
`;
const InputArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const InputSearch = styled.div`
  position: relative;
  width: 400px;
  margin-left: 60px;

  & > input {
    width: 100%;
    border-radius: 10px;
    border: 1px solid lightgray;
    height: 37px;
    padding-left: 10px;
    padding-right: 10px;
  }

  .fa-search {
    position: absolute;
    right: 0px;
    top: 13px;
    margin: 0;
  }
`;

const SubMenus = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
`;

const ToggleMenu = styled.button`
  width: 3%;
  height: 40px;
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
  padding: 0px 10px 0px 0px;
  z-index: 1;
  margin-right: 10px;
  margin-left: 10px;

  .bar {
    display: block;
    width: 30px;
    height: 4px;
    margin-bottom: 6px;
    background: #343333;
    border-radius: 1px;
  }

  &:focus ~ .navWrap > .megaMenu {
    transform: translateX(0px);
    -webkit-transform: translateX(0px);
    -moz-transform: translateX(0px);
    -ms-transform: translateX(0px);
    -o-transform: translateX(0px);
  }

  .navWrap {
    position: relative;
    width: 5%;
    display: inline-block;
  }
`;

const NavWrap = styled.div`
  position: relative;
  width: 5%;
  display: inline-block;

  & h1 {
    position: absolute;
    padding-top: 6px;
    margin: 0;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    font-size: 14px;
    font-weight: bolder;
    z-index: 1;

    label {
      margin-right: 150px;
      font-size: 30px;
    }
  }
`;

const ProfileZone = styled.div`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  background-color: white;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const SubTitle = styled.li`
  transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  margin: 20px auto 5px auto;
  text-decoration: none;
  list-style: none;
  width: 80%;

  & a:hover {
    color: #fff;
  }
`;

const InfoZone = styled.li`
  text-align: center;
  font-size: 15px;
  font-weight: 800;
  padding: 10px 0;
`;

const MainTitle = styled.li`
  text-decoration: none;
  list-style: none;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
`;

const SubNav = styled.a`
  font-size: 16px;
  font-weight: bolder;
  color: black;
  text-align: center;
  text-decoration: none;
  background: #3db6ae;
  width: 90%;
  transition: all 1s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
`;

const MainNav = styled.a`
  font-size: 20px;
  font-weight: bolder;
  color: black;
  text-align: center;
  text-decoration: none;
  background: #3db6ae;
  width: 90%;

  &:hover {
    color: black;
  }
`;

const MegaMenu = styled.ul`
  transform: translateX(-270px);
  -ms-transform: translateX(-270px);
  -o-transform: translateX(-270px);
  -webkit-transform: translateX(-270px);
  -moz-transform: translateX(-270px);
  transition: all 0.5s ease-in-out;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  list-style-type: none;
  padding: 50px 0 0 0;
  margin: 0;
  top: 0px;
  left: 0;
  background: #3db6ae;
  position: fixed;
  width: 250px;
  height: 100%;
  z-index: 100;
  overflow: scroll;
  border-right: 1px solid lightgray;
  box-shadow: 2px 2px 50px 3px;
  -webkit-box-shadow: 2px 2px 50px 3px #000;
  -moz-box-shadow: 2px 2px 50px 3px #000;
  -ms-box-shadow: 2px 2px 50px 3px #000;
  -o-box-shadow: 2px 2px 50px 3px #000;
`;

const Header = () => {
  // @ts-ignore
  // @ts-ignore
  return (
    <SoEasyHeader>
      <InputArea>
        <ToggleMenu>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </ToggleMenu>
        <NavWrap className="navWrap">
          <h1></h1>
          <MegaMenu className="megaMenu">
            <InfoZone>
              <ProfileZone></ProfileZone>
            </InfoZone>
            <InfoZone>린가드</InfoZone>
            <InfoZone>HOST</InfoZone>
            <MainTitle>
              <MainNav>예약목록</MainNav>
              <ul>
                <SubTitle>
                  <SubNav href="/login/SelectUserReservHistory">
                    이용 내역
                  </SubNav>
                </SubTitle>
                <SubTitle>
                  <SubNav href="#">찜 리스트</SubNav>
                </SubTitle>
                <SubTitle>
                  <SubNav href="#">리뷰 목록</SubNav>
                </SubTitle>
              </ul>
            </MainTitle>
            <MainTitle>
              <MainNav href="">내 공간 관리</MainNav>
              <ul>
                <SubTitle>
                  <SubNav href="/login/views/host/manageReserve/reserveStep1.jsp">
                    예약 일정 관리
                  </SubNav>
                </SubTitle>
                <SubTitle>
                  <SubNav href="#">공간 정보 수정</SubNav>
                </SubTitle>
                <SubTitle>
                  <SubNav href="/login/views/host/balance/predict.jsp">
                    공간정산
                  </SubNav>
                </SubTitle>
              </ul>
            </MainTitle>
            <MainTitle>
              <MainNav href="#">기타</MainNav>
              <ul>
                <SubTitle>
                  <SubNav href="/login/views/member/updateMember.jsp">
                    개인 정보 관리
                  </SubNav>
                </SubTitle>
                <SubTitle>
                  <SubNav href="<%=request.getContextPath() %>/selectList.no">
                    공지 사항
                  </SubNav>
                </SubTitle>
                <SubTitle>
                  <SubNav href="<%=request.getContextPath()%>/selectList.faq">
                    Q & A
                  </SubNav>
                </SubTitle>
              </ul>
            </MainTitle>
          </MegaMenu>
        </NavWrap>
        <img src="/images/logo.png" height="40" />
        <InputSearch>
          <input type="text" placeholder="검색어를 입력해보세요." />
          <i className="fa fa-search" aria-hidden="true"></i>
        </InputSearch>
      </InputArea>
      <SubMenus id="">
        <a>공간 등록</a>
        <a>로그인</a>
        <a>회원가입</a>
      </SubMenus>
    </SoEasyHeader>
  );
};

export default Header;
