import React from 'react';
import styled from 'styled-components';

const SpaceTitle = styled.h1`
  margin-top: 20px;
  margin-bottom: 20px;
  color: #40a6b4;
  font-weight: 800;
  font-size: 20px;
`;

const SubInfoArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const ReserveBtn = styled.button`
  width: 80px;
  font-size: 16px;
  color: white;
  border-radius: 5px;
  background: #40a6b4;
  height: 40px;
  font-weight: 800;
  letter-spacing: 5px;
  text-align: center;
`;

const MainInfoBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ImageBox = styled.div`
  width: 60%;
  min-height: 400px;
  margin-top: 30px;

  & img {
    width: 100%;
    height: 400px;
  }
`;

const IntroBox = styled.div`
  width: 35%;
  height: 400px;
  margin-top: 30px;
`;

const DetailTitle = styled.h3`
  color: #40a6b4;
  font-size: 16px;
  font-weight: 800;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const IntroTitle = styled.p`
  font-size: 20px;
  font-weight: 400;
`;

const Introduce = styled.p`
  white-space: pre-wrap;
  font-size: 14px;
  line-height: 2;
  overflow-y: auto;
`;

const Space = () => {
  return (
    <>
      <SpaceTitle>워킹데스크 역삼점(자유석)</SpaceTitle>
      <SubInfoArea>
        <p>132,000원 / 1개월</p>
        <ReserveBtn>예약</ReserveBtn>
      </SubInfoArea>
      <MainInfoBox>
        <ImageBox>
          <img src="/images/areasample.png" />
        </ImageBox>
        <IntroBox>
          <IntroTitle>최적의 업무환경을 갖춘 코워킹스페이스 입니다.</IntroTitle>
          <DetailTitle>소개</DetailTitle>
          <Introduce>
            24시간 냉난방을 제공하여 야간 및 휴일 업무에도 불편함이 없습니다.
            합리적 가격으로 부담없이 일할 수 있는 공간을 제공드리고 있습니다.
            (자유석 이용시 개인락카 또는 모니터 무료 대여) 에스프레소 머신과
            냉장고를 통해 원두커피와 음료 등을 무료로 제공해 드리고 있습니다.
            회의실 사용은 예약제로 운영되며 월 시간제한은 없습니다. 3개월 이상
            계약시 사업자 등록이 무료로 가능합니다. 좌석은 자유석, 지정석으로
            구성되어 있습니다. 일정한 사무공간이 필요없는 분들을 위한 비상주
            사업자 서비스를 운영하고 있습니다. 프로모션 진행 여부는 메니저에게
            문의해 주시기 바랍니다.
          </Introduce>
        </IntroBox>
      </MainInfoBox>
      <DetailTitle>운영 시간</DetailTitle>
      <DetailTitle>추가 정보</DetailTitle>
      <DetailTitle>편의 시설</DetailTitle>
      <DetailTitle>환불 정책</DetailTitle>
    </>
  );
};

export default Space;
