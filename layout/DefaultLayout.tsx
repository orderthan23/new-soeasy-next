import React from 'react';
import styled from 'styled-components';

import Footer from '../components/Footer';
import Header from '../components/Header';

type DefaultLayoutProps = {
  children: React.ReactNode;
};

const Container = styled.div`
  width: 95%;
  margin-right: auto;
  margin-left: auto;
  padding: 10px 10px 0px 10px;
  min-height: 100%;
`;

const ContentArea = styled.section`
  width: 1280px;
  margin-left: auto;
  margin-right: auto;
  z-index: 1;
  min-height: 760px;
  margin-bottom: 100px;
  position: relative;
`;

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div id="container">
      <Header />
      <ContentArea>{children}</ContentArea>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
