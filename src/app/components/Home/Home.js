'use client'

import React from "react";
import { Suspense } from 'react'
import { Container, Row, Col } from "react-bootstrap";

import Type from "./Type";
import Projects from "../Projects/Projects";
import About from "../About/About";
import ResumeNew from "../Resume/ResumeNew";
import SocialIcons from "./SocialIcons";

import { Canvas } from "@react-three/fiber/";

import CanvasTop from "../canvas";


/*
<EffectComposer>
<Bloom luminanceThreshold={0.6} luminanceSmoothing={0.9} height={300} />
</EffectComposer>*/



export default function Home() {
  return (

    <section>
      <Container fluid className="globalBg"></Container>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">

          <Row>
            <Col md={7} className="home-header">

              <h1 className="heading-name">
                <strong className="main-name"> Ángel Robles González</strong>
              </h1>
              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
              <ResumeNew />
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>

              <Suspense fallback={"loading"}>
                <Canvas flat camera={{ fov: 50, position: [0, 2, 8] }}>
                  
                  <CanvasTop/>

                </Canvas>
              </Suspense>

            </Col>

          </Row>
        </Container>
      </Container>

      <SocialIcons />
      <Projects num={6}/>
      <About />
    </section>
  );
}
