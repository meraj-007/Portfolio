import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Apna Hostel"
              description="Easier and convienient way to find a hostel in an unknown city"
              ghLink="hhttps://github.com/meraj-007/apnaHOSTEL"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="RFID based cart"
              description="Built under the IOT project."
              ghLink="https://github.com/meraj-007/RFID-based-Smart-Shopping-Cart"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Socket Programming with AES"
              description="Built under Computer Networks Project."
              ghLink="https://github.com/meraj-007/SOCKET-PROGRAMMING-WITH-AES"
            />
          </Col>
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
