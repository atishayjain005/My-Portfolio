/** @jsxImportSource @emotion/react */
import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import * as styles from "./Navbar.styles.js";

const data = {
  name: "Atishay Jain",
  work: "Currently Freelance Frontend Developer",
  location: "Based in Bengluru and Bhopal",
  links: [
    { link: "Home,", href: "#home" },
    { link: "About,", href: "#about" },
    { link: "Contact", href: "#contact" },
  ],
};

export default function Navbar() {
  return (
    <div css={styles.nav}>
      <Container>
        <Row className="py-4 gap-5">
          <Col>
            <h5 className="fw-bold">{data.name}</h5>
          </Col>
          <Col>
            <h5 className="fw-bold">{data.work}</h5>
          </Col>
          <Col>
            <h5 className="fw-bold">{data.location}</h5>
          </Col>
          <Col className="text-end">
            {data.links.map((li) => (
              <a
                key={li.link}
                className="h5 "
                css={styles.anchor}
                href={li.href}
              >
                {li.link}&nbsp;
              </a>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
