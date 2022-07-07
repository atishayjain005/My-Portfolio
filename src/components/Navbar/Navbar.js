/** @jsxImportSource @emotion/react */
import React from "react";
import * as styles from "./Navbar.styles.js";
import { Container, Row, Col } from "react-bootstrap";

export default function Navbar() {
  return (
    <div css={styles.nav}>
      <Container>
        <Row className="py-4 gap-5">
          <Col>
            <h5 className="fw-bold">Atishay Jain</h5>
          </Col>
          <Col>
            <h5 className="fw-bold">Currently Freelance Frontend Developer</h5>
          </Col>
          <Col>
            <h5 className="fw-bold">Based in Bengluru and Bhopal</h5>
          </Col>
          <Col className="text-end">
            <a className="h5" css={styles.anchor} href="#">
              Home,&nbsp;
            </a>
            <a className="h5" css={styles.anchor} href="#">
              About,&nbsp;
            </a>
            <a className="h5" css={styles.anchor} href="#">
              Contact
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
