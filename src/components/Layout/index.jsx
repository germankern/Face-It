import React from "react";
import Head from "next/head";
import Navbar from "../Navbar";
import styles from "./styles.module.css";
import Footer from "../Footer";

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Face It | Citas Rápidas</title>
      </Head>
      <div className={styles.maxWidth}>
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
}

export default Layout;
