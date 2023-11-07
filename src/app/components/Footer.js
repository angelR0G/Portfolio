'use client'

import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Icon } from '@iconify/react';

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="50%" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/angelR0G"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Icon icon="mdi:github" />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://angelro0.itch.io/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Icon icon="cib:itch-io" />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/angel-robles-459353272/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Icon icon="mdi:linkedin" />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/angel90801"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Icon icon="mdi:twitter" />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
