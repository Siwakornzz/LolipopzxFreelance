import Head from "next/head";
import React from "react";
import Nav from "../nav/Nav";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>LOLIPOPZ-FREELANCE</title>
        <meta name="description" content="" />
        <link
          rel="icon"
          href="https://icons-for-free.com/download-icon-lollipop-1319971785387025556_512.png"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.css"
        />
        {/* <link
          href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/4.3.0/mdb.min.css"
          rel="stylesheet"
        />
        <script
          type="text/javascript"
          src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/4.3.0/mdb.min.js"
        ></script> */}
      </Head>

      <Nav />

      {children}
    </div>
  );
};

export default Layout;
