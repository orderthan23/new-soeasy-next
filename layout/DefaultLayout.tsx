import React from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';
import layoutStyles from '../styles/layout-styles';
const { Container, ContentArea } = layoutStyles;

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
