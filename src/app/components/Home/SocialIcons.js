'use client'

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Icon } from '@iconify/react';

function SocialIcons() {
    return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
            Feel free to <span className="colorText">contact </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/angelR0G/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <Icon icon="mdi:github" />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/angel90801"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <Icon icon="mdi:twitter" />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/angel-robles-459353272/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <Icon icon="mdi:linkedin" />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://angelro0.itch.io/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <Icon icon="cib:itch-io" />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default SocialIcons;
