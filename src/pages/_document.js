import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/x-icon" href="/IconLogo.svg"></link>
        <title>Face It | Citas Rápidas</title>
      </Head>
      <body>
        <Main />
        <div id="__modal" className="modalexample"></div>
        <NextScript />
      </body>
    </Html>
  );
}
