/** @jsxImportSource @emotion/react */
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import * as styles from "./Contact.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  return (
    <div css={styles.wrapper}>
      <Container>
        {/* <styles.Neumorphism> */}
        <Row>
          <Col xs={12} className="pt-5 pb-0">
            {/* <h1
              className="text-uppercase fw-bold  text-start"
              css={styles.bigText}
            >
              Get in Touch
            </h1> */}
            <h1 className="fw-bold text-center " css={styles.tagline}>
              Connect with me
            </h1>
          </Col>
          <Col className="p-5">
            <div
              className="row gap-3 text-center justify-content-center"
              css={styles.socialLinks}
            >
              <a href="#" className="p-3 col-sm-2">
                <FontAwesomeIcon icon={faGithub} />
                &nbsp;&nbsp;GitHub
              </a>
              <a href="#" className="p-3 col-sm-2">
                <FontAwesomeIcon icon={faLinkedin} />
                &nbsp;&nbsp;LinkedIn
              </a>
              <a href="#" className="p-3 col-sm-2">
                <FontAwesomeIcon icon={faFacebook} />
                &nbsp;&nbsp;Facebook
              </a>
              <a href="#" className="p-3 col-sm-2">
                <FontAwesomeIcon icon={faInstagram} />
                &nbsp;&nbsp;Instagram
              </a>
              <a href="#" className="p-3 col-sm-2">
                <FontAwesomeIcon icon={faGoogle} />
                &nbsp;&nbsp;Mail
              </a>
            </div>
          </Col>
        </Row>
        {/* </styles.Neumorphism> */}
      </Container>
    </div>
  );
}
