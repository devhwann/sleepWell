import React from 'react';
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import Script from 'next/script';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });
      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name="naver-site-verification" content="c520fd386578e44f78be48261c122ca7eeeefa47" />

          <meta name="google-site-verification" content="xE71eHQcrVsYzKTZnn_sv4wh_Q7Yay6_8dfiaG_ao5g" />
          <link rel="icon" href=".//favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href=".//apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href=".//favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href=".//favicon-16x16.png" />
          <link rel="manifest" href=".//site.webmanifest" />
          <link href="https://fonts.googleapis.com/css2?family=Jua&display=swap" rel="stylesheet" />
          <link
            href="https://fonts.googleapis.com/css?family=Noto+Sans+KR:400,700&display=swap&subset=korean"
            rel="stylesheet"
          />
          {/* <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8286719596729035"
            crossOrigin="anonymous"
          ></script> */}
          {/* <script async type="text/javascript" src="https://t1.daumcdn.net/kas/static/ba.min.js" /> */}
        </Head>
        <body>
          <Main />
          <script type="text/javascript" src="//wcs.naver.net/wcslog.js"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                if(!wcs_add) var wcs_add = {}; wcs_add["wa"] = "b9e187d58e74c8";
                if(window.wcs) {wcs_do()}
              `,
            }}
          />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
