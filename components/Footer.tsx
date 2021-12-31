import React from 'react';
import styled from 'styled-components';

const SoEasyFooter = styled.footer`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100px;
  padding-top: 5px;
  padding-bottom: 5px;
  background-color: #c4c4c4;
  text-align: center;
`;

const FooterWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  height: 100px;
`;

const FooterText = styled.div`
  font-size: 12px;
  text-align: left;
`;

const Footer = () => {
  return (
    <SoEasyFooter>
      <FooterWrap>
        <FooterText>
          <p>
            상호명: SO Easy | 대표: 고종현 | 사업자등록번호 : 851-87-00622 |
            서울 강남 제2014-01호
            <br />
            사업자등록정보 영업소재지: 서울특별시 강남구 테헤란로14길 6 남도빌딩
            2F
            <br />
            이메일: programmer7771@gmail.com 대표전화: 7447-0547(평일 오후
            3시30분 ~ 오후 10시)
            <br />
            온라인 1:1 문의 바로가기(평일 오후 3시30분 ~ 오후 10시) * 공간에
            대한 문의사항은 해당 공간 호스트에게 직접 문의해주세요.
          </p>
        </FooterText>
        <div>
          <img src="/images/logo.png" />
        </div>
      </FooterWrap>
    </SoEasyFooter>
  );
};

export default Footer;
