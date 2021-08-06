import { AppProps } from 'next/app';
import Head from 'next/head';
import { SWRConfig } from 'swr';
import { ThemeProvider } from 'styled-components';

import httpClient from 'utils/httpClient';

import theme from 'styles/theme';
import GlobalStyles from 'styles/global';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Next Scaffold</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06092B" />
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
        />
      </Head>
      <GlobalStyles />
      <SWRConfig
        value={{
          fetcher: httpClient,
        }}
      >
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </SWRConfig>
    </>
  );
}

export default App;
