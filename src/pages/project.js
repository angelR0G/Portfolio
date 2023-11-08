import React from "react";
import Head from "next/head";

import NavBar from "../app/components/Navbar";
import Projects from "../app/components/Projects/Projects";
import Footer from "../app/components/Footer";

import '../app/style.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Script from 'next/script'

export default function IndexProjects() {
  return (
    <>
      <Head >
        <title>Angel Robles | Projects</title>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.0.0/flowbite.min.css" rel="stylesheet" />
      </Head>
      <NavBar />
      <Projects num={0} />
      <Footer />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.0.0/flowbite.min.js"></Script>
    </>
  );
}