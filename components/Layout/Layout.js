import Head from "next/head";
import React from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";

const Layout = ({ children, title }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>

      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
