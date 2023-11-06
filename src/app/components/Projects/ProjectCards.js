import React from "react";
import Image from 'next/image'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { Icon } from '@iconify/react';

/*<Image
        alt={props.imageAlt}
        // Importing an image will
        // automatically set the width and height
        src={props.imgPath}
        sizes="100vw"
        // Make the image display full width
        style={{
          width: '100%',
          height: 'auto',
        }}
      />*/ 

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Body>
      <Image
        alt="Mountains"
        // Importing an image will
        // automatically set the width and height
        src={props.imgPath}
        sizes="100vw"
        // Make the image display full width
        style={{
          width: '100%',
          height: 'auto',
        }}
      />
        <Card.Title style={{paddingTop: "4%"}}>{props.title}</Card.Title>
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
            <Icon icon="material-symbols:web" /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
