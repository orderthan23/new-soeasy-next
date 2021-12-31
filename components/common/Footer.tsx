import React from 'react';

import { FooterStyles } from '../../styles/layout-styles';
const { SoEasyFooter, FooterWrap, FooterText } = FooterStyles;
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
