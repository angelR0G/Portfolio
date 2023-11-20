import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Button from "react-bootstrap/Button";

import { Icon } from '@iconify/react';
import { navLinks } from "../../dataNav";


const goingHome = "./Assets/Projects/goingHome.png";
const orphans = "./Assets/Projects/orphanslullaby.png";
const zombiedisco = "./Assets/Projects/zombieDisco.png";
const twrh = "./Assets/Projects/twrh.png";
const cargl = "./Assets/Projects/cargl.png";
const graverobber = "./Assets/Projects/graverobber.png";
const tfg = "./Assets/Projects/coverTFG.png";


let projectsCards = [
  <Col key={0} md={4} className="project-card">
    <ProjectCard
      imgPath={orphans}
      imageAlt="Orphan's Lullaby Cover"
      title="Orphan's Lullaby"
      description=""
      ghLink="https://github.com/angelR0G/OrphansLullaby"
      demoLink="https://pandaemicstudio.itch.io/orphans-lullaby"
      tools={["mdi:language-cpp", "simple-icons:opengl"]}
    />
  </Col>,

  <Col key={1} md={4} className="project-card">
    <ProjectCard
      imgPath={goingHome}
      imageAlt="Going Home Cover"
      title="Going Home"
      description=""
      ghLink="https://github.com/angelR0G/GBJam2023"
      demoLink="https://adrimb.itch.io/going-home/"
      tools={["devicon-plain:godot-wordmark"]}
    />
  </Col>,

  <Col key={2} md={4} className="project-card">
    <ProjectCard
      imgPath={zombiedisco}
      imageAlt="Zombie Disco Cover"
      title="Zombie Disco"
      description=""
      ghLink="https://github.com/angelR0G/ZombieDisco"
      demoLink="https://pandemixstudio.itch.io/zombiedisco"
      tools={["file-icons:assembly-generic"]}
    />
  </Col>,

  <Col key={3} md={4} className="project-card">
    <ProjectCard
      imgPath={graverobber}
      imageAlt="Grave Robber Cover"
      title="Grave Robber"
      description=""
      ghLink=""
      demoLink="https://angelro0.itch.io/grave-robber"
      tools={["mdi:language-cpp", "fontisto:unreal-engine"]}
    />
  </Col>,

  <Col key={4} md={4} className="project-card">
    <ProjectCard
      imgPath={twrh}
      imageAlt="Those who remain here Cover"
      title="Those who remain here"
      description=""
      ghLink="https://github.com/angelR0G/Those-Who-Remain-Here"
      demoLink=""
      tools={["mdi:language-cpp", "simple-icons:sfml"]}
    />
  </Col>,
  <Col key={5} md={4} className="project-card">
  <ProjectCard
    imgPath={tfg}
    imageAlt="TFG Cover"
    title="Degree Project"
    description="Applying Virtual Reality to simulate inclusive academic buildings"
    ghLink="https://github.com/angelR0G/TFG"
    demoLink=""
    tools={["mdi:unity", "mdi:language-csharp"]}
  />
</Col>,
  <Col key={6} md={4} className="project-card">
    <ProjectCard
      imgPath={cargl}
      imageAlt="CarGL Cover"
      title="CarGL"
      description=""
      ghLink="https://github.com/angelR0G/CarGL/"
      demoLink=""
      tools={["mdi:language-cpp", "simple-icons:opengl"]}
    />
  </Col>,
  
]

function Projects(props) {
  let showProjects = [];
  let numShow = 0;
  if (props.num == 0)
    numShow = projectsCards.length;
  else
    numShow = props.num;
  for (let i = 0; i < Math.min(numShow, projectsCards.length); i++) {
    showProjects.push(projectsCards[i]);
  }

  return (
    <section>
      <Container fluid className="globalBg"></Container>
      <Container fluid className="project-section">
        <Container>
          <h1 className="project-heading">
            My Recent <strong className="colorText">Works </strong>
          </h1>
          <p style={{ color: "white", textAlign: "center" }}>
            Here are a few projects I&apos;ve worked on recently.
          </p>

          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            {showProjects}
          </Row>
        </Container>
        {props.showMore && (
          <Row style={{ justifyContent: "center", position: "relative" }}>
            <Button
              variant="primary"
              href={navLinks[1].path}
              style={{ maxWidth: "250px" }}
            >See more
            </Button>
          </Row>
        )}

      </Container>

    </section>
  );
}

export default Projects;
