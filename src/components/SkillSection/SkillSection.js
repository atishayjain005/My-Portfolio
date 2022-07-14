/** @jsxImportSource @emotion/react */
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Neumorphism } from "./SkillSection.styles";
import Form from "react-bootstrap/Form";
import * as styles from "./SkillSection.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

import { faCode, faPlus } from "@fortawesome/free-solid-svg-icons";

export default function SkillSection() {
  return (
    <div css={styles.wrapper} className="py-5">
      <Container>
        <Row>
          <Col xs={12}>
            <h1
              css={styles.bigText}
              className="fw-bold  my-5 text-uppercase border-start border-5 border-primary px-5"
            >
              Technical Skills&nbsp;
              <FontAwesomeIcon
                icon={faCode}
                style={{ fontSize: 120, color: "#0d6efd" }}
              />
            </h1>
          </Col>
          <Row className="jusify-content-between align-items-center">
            <Col md={6}>
              <Neumorphism className="p-5 text-light row ">
                <h3 className="col-sm-6 fw-bold">
                  <FontAwesomeIcon
                    icon={faPlus}
                    style={{ fontSize: 25, color: "#0d6efd" }}
                  />
                  &nbsp;Html
                </h3>
                <h3 className="col-sm-6 fw-bold">
                  <FontAwesomeIcon
                    icon={faPlus}
                    style={{ fontSize: 25, color: "#0d6efd" }}
                  />
                  &nbsp;Css
                </h3>
                <h3 className="col-sm-6 fw-bold">
                  <FontAwesomeIcon
                    icon={faPlus}
                    style={{ fontSize: 25, color: "#0d6efd" }}
                  />
                  &nbsp;Scss
                </h3>
                <h3 className="col-sm-6 fw-bold">
                  <FontAwesomeIcon
                    icon={faPlus}
                    style={{ fontSize: 25, color: "#0d6efd" }}
                  />
                  &nbsp;EmotionJS
                </h3>
                <h3 className="col-sm-6 fw-bold">
                  <FontAwesomeIcon
                    icon={faPlus}
                    style={{ fontSize: 25, color: "#0d6efd" }}
                  />
                  &nbsp;Bootstrap
                </h3>
                <h3 className="col-sm-6 fw-bold">
                  <FontAwesomeIcon
                    icon={faPlus}
                    style={{ fontSize: 25, color: "#0d6efd" }}
                  />
                  &nbsp;JavaScript
                </h3>
                <h3 className="col-sm-6 fw-bold">
                  <FontAwesomeIcon
                    icon={faPlus}
                    style={{ fontSize: 25, color: "#0d6efd" }}
                  />
                  &nbsp;ReactJS
                </h3>
                <h3 className="col-sm-6 fw-bold">
                  <FontAwesomeIcon
                    icon={faPlus}
                    style={{ fontSize: 25, color: "#0d6efd" }}
                  />
                  &nbsp;NextJS
                </h3>
                {/* <div className="bg-transparent border border-secondary border-2 w-100 mb-3 rounded-3">
                  <div className="bg-secondary w-75 p-2 text-white ">
                    HTML,CSS
                  </div>
                </div>
                <div className="bg-transparent border border-secondary border-2 w-100 mb-3 rounded-3">
                  <div className="bg-secondary w-75 p-2 text-white ">JS</div>
                </div>
                <div className="bg-transparent border border-secondary border-2 w-100 mb-3 rounded-3">
                  <div className="bg-secondary w-75 p-2 text-white ">
                    Bootstrap
                  </div>
                </div>
                <div className="bg-transparent border border-secondary border-2 w-100 mb-3 rounded-3">
                  <div className="bg-secondary w-75 p-2 text-white ">
                    ReactJS
                  </div>
                </div>
                <div className="bg-transparent border border-secondary border-2 w-100 rounded-3">
                  <div className="bg-secondary w-75 p-2 text-white  ">
                    NextJS
                  </div>
                </div> */}
              </Neumorphism>
            </Col>
            <Col md={6}>
              <div className="text-center text-light">
                <Image
                  src="/assets/art.PNG"
                  width={400}
                  height={400}
                  alt="art"
                />
              </div>
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  );
}
