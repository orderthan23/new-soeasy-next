import type { AppProps } from 'next/app';

import GlobalStyle from '../styles/global-styles';
import DefaultLayout from '../layout/DefaultLayout';

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
