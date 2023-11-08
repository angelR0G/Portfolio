import React from "react";
import Head from "next/head";

import NavBar from "../app/components/Navbar";
import About from "../app/components/About/About";
import Footer from "../app/components/Footer";

import '../app/style.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Script from 'next/script'

export default function IndexAbout() {
  return (
    <>
      <Head >
        <title>Angel Robles | About</title>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.0.0/flowbite.min.css" rel="stylesheet" />
      </Head>
      <NavBar />
      <About/>
      <Footer />
    </>
  );
}