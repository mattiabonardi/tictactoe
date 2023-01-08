import React from "react";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider, CssBaseline } from "@mui/material";

import createEmotionCache from "../utility/createEmotionCache";
import theme from "../styles/theme/dark";
import "../styles/globals.css";

const clientSideEmotionCache = createEmotionCache();

const MyApp = (props: {
  Component: any;
  emotionCache?: EmotionCache | undefined;
  pageProps: any;
}) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;
