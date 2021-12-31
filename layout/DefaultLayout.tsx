import React from 'react';

import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import { DefaultLayoutStyles } from '../styles/layout-styles';
const { Container, ContentArea } = DefaultLayoutStyles;

type DefaultLayoutProps = {
  children: React.ReactNode;
};

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <Container>
      <Header />
      <ContentArea>{children}</ContentArea>
      <Footer />
    </Container>
  );
};

export default DefaultLayout;
