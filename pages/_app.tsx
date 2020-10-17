import React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../src/theme'

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles)
    }
  }, [])

  return (
    <React.Fragment>
      <Head>
        <title>didilinkin 主页</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta
          name="keywords"
          content="didilinkin，哈希肯，yanxiaodi，Sam Fisher, 晓迪"
        />
        <meta
          name="description"
          content="didilinkin.cn 是 didilinkin的主页; 哈希肯, yanxiaodi, 晓迪, 929213769@qq.com, didilinkin@hotmail.com"
        />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  )
}
