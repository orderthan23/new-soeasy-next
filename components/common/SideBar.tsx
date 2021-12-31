import React from 'react';

import { SideBarStyles } from '../../styles/layout-styles';
const {
  MainTitle,
  MainNav,
  SubNav,
  SubTitle,
  NavWrap,
  MegaMenu,
  ToggleMenu,
  ProfileZone,
  InfoZone,
} = SideBarStyles;
const SideBar = () => {
  return (
    <>
      {/*사이드 바 영역*/}
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
                <SubNav href="/login/SelectUserReservHistory">이용 내역</SubNav>
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
      {/*사이드바 영역 종료*/}
    </>
  );
};

export default SideBar;
