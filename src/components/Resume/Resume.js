/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import * as styles from "./Resume.styles";

export default function Resume() {
  return (
    <div css={styles.wrapper}>
      <Container>
        <Row>
          <Col>
            <h1
              css={styles.bigText}
              className="fw-bold text-end text-uppercase my-5 border-end border-5  px-5"
            >
              Checkout my Resume
            </h1>
            <div css={styles.pdfContainer} className="text-center">
              <iframe
                className="rounded-3 shadow-lg border border-3 border-secondary"
                src="/assets/Atishay_Main.pdf"
                width="100%"
                height="1000px"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
