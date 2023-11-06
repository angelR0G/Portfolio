'use client'

import React from "react";
import Card from "react-bootstrap/Card";

//import { Icon } from '@iconify/react';
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            Hi am <span className="colorText">Ángel Robles González </span>
            from <span className="colorText"> Spain.</span>
            <br /> I graduated from Alicante University with a degree
            in Multimedia Engineering.
            <br />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
