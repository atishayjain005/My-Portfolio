import { Html, Head, Main, NextScript, Script } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,400&display=swap"
          rel="stylesheet"
        />
        {/* <Script
          src="https://kit.fontawesome.com/aaef485466.js"
          crossOrigin="anonymous"
        ></Script> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
