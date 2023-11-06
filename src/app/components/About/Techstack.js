'use client'

import React from "react";
import { Col, Row } from "react-bootstrap";
import { Icon } from '@iconify/react';

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <Icon icon="mdi:language-cpp" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Icon icon="file-icons:assembly-generic" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Icon icon="bxl:java" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Icon icon="devicon-plain:godot-wordmark" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Icon icon="akar-icons:html-fill" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Icon icon="akar-icons:css-fill" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Icon icon="ri:javascript-fill" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Icon icon="akar-icons:php-fill" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Icon icon="mdi:nodejs" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Icon icon="simple-icons:mysql" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Icon icon="simple-icons:mongodb" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Icon icon="mdi:git" />
      </Col>
      
    </Row>
  );
}

export default Techstack;
