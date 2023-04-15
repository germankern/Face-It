import "@/styles/globals.css";
import Layout from "../components/Layout";
// import Script from "next/script";
import GoogleAnalytics from "@bradgarropy/next-google-analytics";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      {/* <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-LXQ92YMNJT"
      />
      <script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-LXQ92YMNJT');
        `}
      </script> */}
      <GoogleAnalytics measurementId="G-LXQ92YMNJT" />
      <Component {...pageProps} />
    </Layout>
  );
}
