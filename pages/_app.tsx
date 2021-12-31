import type { AppProps } from 'next/app';

import DefaultLayout from '../layout/DefaultLayout';
import GlobalStyle from '../styles/global-styles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </>
  );
}

export default MyApp;
