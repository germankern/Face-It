import { Html, Main, Head, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/x-icon" href="/IconLogo.svg"></link>
      </Head>
      <body>
        <Main />
        <div id="__modal" className="modalexample"></div>
        <NextScript />
      </body>
    </Html>
  );
}
