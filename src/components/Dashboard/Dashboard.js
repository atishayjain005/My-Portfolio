/** @jsxImportSource @emotion/react */
import React from "react";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import * as styles from "./Dashboard.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
// import { BsArrowDown } from "react-icons/bs";

export default function Dashboard() {
  return (
    <div css={styles.wrapper}>
      <Container>
        <Row>
          <Col md={6} className="py-3">
            <h1 className="fw-bold" css={styles.bigText}>
              FRONTEND DEVELOPER
            </h1>
            <Image src="/assets/img.jpg" width={550} height={230} alt="image" />
          </Col>
          <Col md={12} className="row">
            <h4 className="col-md-2  py-4" css={styles.downArrow}>
              <FontAwesomeIcon
                icon={faAnglesDown}
                style={{ fontSize: 120, color: "#212529" }}
              />
              {/* <BsArrowDown  size={150} /> */}
            </h4>
            <h4 className="col-md-4 py-4 d-flex align-items-end fw-bold  ">
              I SUPPORT DESIGNERS AND AGENCIES WITH CREATVE DEVELOPMENT
            </h4>
            <h1 css={styles.bigText} className="col-md-6 text-end fw-bold">
              ATISHAY JAIN
            </h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
