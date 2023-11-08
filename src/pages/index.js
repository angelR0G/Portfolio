import React from "react";
import Head from "next/head";

import NavBar from "../app/components/Navbar";
import Home from "../app/components/Home/Home";
import Footer from "../app/components/Footer";

import { Inter } from 'next/font/google'
import '../app/style.css'
const inter = Inter({ subsets: ['latin'] })
import Script from 'next/script'

import "bootstrap/dist/css/bootstrap.min.css";

export default function IndexHome() {
  return (
    <>
      <Head >
        <title>Angel Robles | Portfolio</title>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.0.0/flowbite.min.css" rel="stylesheet" />
      </Head>
      <NavBar />
      <Home />
      <Footer />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.0.0/flowbite.min.js"></Script>
    </>
  );
}