import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function Footer() {
  return (
    <div className="bg-primary  ">
      <Container>
        <Row>
          <Col>
            <h1 className="text-center text-light fw-bolder text-uppercase py-5">
              Hire me!
            </h1>
            <div className="d-flex text-light justify-content-center">
              <p>+91-8770287658</p>&nbsp;&nbsp;|&nbsp;&nbsp;
              <a href="#" className="text-light text-decoration-none">atishay005@gmail.com</a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
