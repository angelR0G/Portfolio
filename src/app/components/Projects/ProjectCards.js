'use client'
import React, { useState } from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { motion, AnimatePresence } from "framer-motion"
import { Icon } from '@iconify/react';



function ProjectCards(props) {

  let [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);
  return (
    <Card className="project-card-view"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}>

      <Card.Img src={props.imgPath} alt={props.imageAlt} />

      {isHovering && (
        <motion.div
          animate={{
            opacity: [0, 0.75, 1]
          }}
        >
          <Card.ImgOverlay className="cardOverlay">
            {props.tools.map((icon, index) => {
              return (
                <Icon key={index} icon={icon} style={{ marginLeft: "2%", marginRight: "2%", fontSize: "180%" }} />
              );
            })}
          </Card.ImgOverlay>
        </motion.div>

      )}


      <Card.Body>

        <Card.Title style={{ paddingTop: "4%" }}>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {props.ghLink && (
          <Button
            variant="primary"
            href={props.ghLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <Icon icon="mdi:github" /> &nbsp;
            {"GitHub"}
          </Button>
        )}
        {"\n"}
        {"\n"}

        {props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <Icon icon="cib:itch-io" /> &nbsp;
            {"Itch.io"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
