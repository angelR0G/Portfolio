'use client'

import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";


import { Icon } from '@iconify/react';

function ResumeNew() {
    const [width, setWidth] = useState(1200);

    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);

    return (
        <div>
        <Container fluid className="resume-section">
            <Row style={{ justifyContent: "left", position: "relative", marginLeft: "5%"}}>
            <Button
                variant="primary"
                href={"Assets/Angel_Robles_Gonzalez-Resume.pdf"}
                target="_blank"
                style={{ maxWidth: "250px" }}
            >
                <Icon icon="material-symbols:download" />
                &nbsp;Download CV
            </Button>
            </Row>
        </Container>
        </div>
    );
}
  
export default ResumeNew;
