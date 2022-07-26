/** @jsxImportSource @emotion/react */
import React from "react";

import { Col, Container, Row } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";

import * as styles from "./Contact.styles";

const data = {
  header: "Connect with me",
  links: [
    { link: "GitHub", icon: faGithub },
    { link: "Linkedin", icon: faLinkedin },
    { link: "Instagram", icon: faInstagram },
    { link: "Google", icon: faGoogle },
  ],
};

export default function Contact() {
  return (
    <div css={styles.wrapper} className="py-5" id="contact">
      <Container>
        <Row>
          <Col xs={12} className="pt-5 pb-0">
            <h1 className="fw-bold text-center " css={styles.tagline}>
              {data.header}
            </h1>
          </Col>
          <Col className="py-5">
            <div
              className="row gap-2 text-center justify-content-center"
              css={styles.socialLinks}
            >
              {data.links.map((link, index) => (
                <a key={index} href="#" className="p-3 mx-2 col">
                  <FontAwesomeIcon icon={link.icon} />
                  &nbsp;&nbsp;{link.link}
                </a>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
