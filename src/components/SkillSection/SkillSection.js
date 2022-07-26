/** @jsxImportSource @emotion/react */
import React from "react";
import Image from "next/image";

import { Col, Container, Row } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faPlus } from "@fortawesome/free-solid-svg-icons";

import * as styles from "./SkillSection.styles";

const data = {
  header: "Technical Skills",
  skills: [
    { name: "Html" },
    { name: "Css" },
    { name: "JavaScript" },
    { name: "Scss" },
    { name: "EmotionJs" },
    { name: "ReactJs" },
    { name: "NextJs" },
    { name: "Bootstrap" },
  ],
};

export default function SkillSection() {
  return (
    <div css={styles.wrapper} className="py-5">
      <Container>
        <Row>
          <Col sm={12}>
            <h1
              css={styles.bigText}
              className="fw-bold  my-5 text-uppercase border-start border-5 border-primary px-5"
            >
              {data.header}&nbsp;
              <FontAwesomeIcon icon={faCode} style={{ color: "#0d6efd" }} />
            </h1>
          </Col>
          <Col>
            <Row className="jusify-content-between align-items-center">
              <Col md={6}>
                <styles.Neumorphism className="p-5 text-light row ">
                  {data.skills.map((skill, index) => (
                    <h3 key={index} className="col-sm-6 fw-thiner">
                      <FontAwesomeIcon
                        icon={faPlus}
                        style={{ fontSize: 25, color: "#0d6efd" }}
                      />
                      &nbsp;&nbsp;{skill.name}
                    </h3>
                  ))}
                </styles.Neumorphism>
              </Col>
              <Col md={6}>
                <div className="text-center text-light py-5 py-sm-0">
                  <Image
                    src="/assets/art.PNG"
                    width={400}
                    height={400}
                    alt="art"
                  />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
