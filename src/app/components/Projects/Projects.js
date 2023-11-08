import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import goingHome from "../../../../public/Assets/Projects/goingHome.png";
import orphans from "../../../../public/Assets/Projects/orphanslullaby.png";
import zombiedisco from "../../../../public/Assets/Projects/zombieDisco.png";
import twrh from "../../../../public/Assets/Projects/twrh.png";
import cargl from "../../../../public/Assets/Projects/cargl.png";
import graverobber from "../../../../public/Assets/Projects/graverobber.png";


let projectsCards = [
  <Col key={0} md={4} className="project-card">
    <ProjectCard
      imgPath={orphans}
      imageAlt="Orphan's Lullaby Cover"
      title="Orphan's Lullaby"
      description=""
      ghLink="https://github.com/angelR0G/OrphansLullaby"
      demoLink="https://pandaemicstudio.itch.io/orphans-lullaby"
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
    />
  </Col>,
  <Col key={5} md={4} className="project-card">
    <ProjectCard
      imgPath={cargl}
      imageAlt="CarGL Cover"
      title="CarGL"
      description=""
      ghLink="https://github.com/angelR0G/CarGL/"
      demoLink="https://github.com/angelR0G/CarGL/releases/tag/releases"
    />
  </Col>
]

function Projects(props) {
  let showProjects=[];
  let numShow = 0;
  if(props.num == 0)
    numShow = projectsCards.length;
  else
    numShow = props.num;
  for(let i= 0; i<Math.min(numShow, projectsCards.length); i++){
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
      </Container>
    </section>
  );
}

export default Projects;
