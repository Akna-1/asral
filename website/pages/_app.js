import React, { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import NextNProgress from "nextjs-progressbar";
import Layout from "../components/Layout";
import "../public/assets/css/globals.css";
import { ToastProvider } from "@hanseo0507/react-toast";

function main({ Component, pageProps }) {
  const [loading, setLoading] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const router = useRouter();
  const path = router.asPath;

  return (
    <>
      <Head>
        <title>{`${path}`}</title>
      </Head>
      <NextNProgress height={3} color="454FBF" />
      <ToastProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ToastProvider>
    </>
  );
}

export default main;
