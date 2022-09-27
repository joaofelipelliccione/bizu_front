import * as React from 'react';
import type { AppProps } from 'next/app';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';

import '@fontsource/quicksand/300.css';
import '@fontsource/quicksand/400.css';
import '@fontsource/quicksand/500.css';
import '@fontsource/quicksand/700.css';

import Head from 'next/head';
import { Provider } from 'react-redux';
import initStore from '../redux/store';
import createEmotionCache from '../utility/createEmotionCache';
import lightThemeOptions from '../styles/theme/lightThemeOptions';
import Layout from '../components/Layout';
import '../styles/globals.css';

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

const lightTheme = createTheme(lightThemeOptions);

const MyApp: React.FunctionComponent<MyAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Head>
          <title>bizu design</title>
          <meta name="description" content="Empoderando a criatividade!" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout>
          <Provider store={ initStore }>
            <Component {...pageProps} />
          </Provider>
        </Layout>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;
