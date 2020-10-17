import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheets } from '@material-ui/core/styles'
import theme from '../src/theme'

// sentry
import * as Sentry from '@sentry/browser'
import { Integrations } from '@sentry/tracing'

export default class MyDocument extends Document {
  render() {
    Sentry.init({
      dsn:
        'https://b1b1eec5650d43b0a62c739e1cf5c4a3@o267775.ingest.sentry.io/5464346',
      integrations: [new Integrations.BrowserTracing()],
      // We recommend adjusting this value in production, or using tracesSampler
      // for finer control
      tracesSampleRate: 1.0,
    })

    return (
      <Html lang="en">
        <Head>
          {/* PWA primary color */}
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          {/* sentry */}
          <script
            src="https://browser.sentry-cdn.com/5.26.0/bundle.tracing.min.js"
            integrity="sha384-o3PmxWd0Sgy+qiulNfK/K+YxK4Neya0uoBhAdI1YCdS6yuHZM7vN8v9r0cBDmQ9K"
            crossOrigin="anonymous"
          />
          {/* 站长统计 */}
          <script type="text/javascript">
            document.write(unescape("%3Cspan
            id='cnzz_stat_icon_1279350006'%3E%3C/span%3E%3Cscript
            src='https://s9.cnzz.com/stat.php%3Fid%3D1279350006'
            type='text/javascript'%3E%3C/script%3E"));
          </script>
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

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
MyDocument.getInitialProps = async ctx => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets()
  const originalRenderPage = ctx.renderPage

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: App => props => sheets.collect(<App {...props} />),
    })

  const initialProps = await Document.getInitialProps(ctx)
  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  }
}
