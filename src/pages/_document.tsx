/*
 * @Author: yanxiaodi 929213769@qq.com
 * @Date: 2023-02-06 17:10:24
 * @LastEditors: yanxiaodi 929213769@qq.com
 * @LastEditTime: 2023-02-14 19:58:47
 * @Description:
 */
import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    /* eslint-disable */
    return (
      <Html lang="en">
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" />
          {/* <script src="/assets/js/three.min.js" /> */}
          <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js" />
          {/* 百度统计 */}
        </Head>
        <body>
          <div id="canvas-wrapper">
            <Main />
            <NextScript />
          </div>
        </body>
      </Html>
    )
  }
}

MyDocument.getInitialProps = async ctx => {
  const initialProps = await Document.getInitialProps(ctx)
  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      ...React.Children.toArray(initialProps.styles),
      // sheets.getStyleElement(),
    ],
  }
}
