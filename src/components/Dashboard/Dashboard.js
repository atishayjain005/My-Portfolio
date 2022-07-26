/** @jsxImportSource @emotion/react */
import React from "react";
import Image from "next/image";

import { Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";

import * as styles from "./Dashboard.styles";

const cardVariants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "tween",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

export default function Dashboard() {
  return (
    <div css={styles.wrapper} id="dashboard">
      <Container>
        <Row>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Col md={6} className="py-3">
              <h1 className="fw-bold" css={styles.bigText}>
                FRONTEND DEVELOPER
              </h1>
              <Image
                src="/assets/img.jpg"
                width={550}
                height={230}
                alt="image"
              />
            </Col>
            <Col md={12} className="row">
              <h4
                className="col-md-2 order-last order-sm-first  my-4"
                css={styles.downArrow}
              >
                <FontAwesomeIcon
                  icon={faAnglesDown}
                  style={{ fontSize: "9vw", color: "#212529" }}
                />
              </h4>
              <h4 className="col-md-4 my-4 d-flex align-items-end fw-bold  ">
                I SUPPORT DESIGNERS AND AGENCIES WITH CREATVE DEVELOPMENT
              </h4>
              <h1
                css={styles.bigText}
                className="col-md-6 text-end fw-bold order-first order-sm-last"
              >
                ATISHAY JAIN
              </h1>
            </Col>
          </motion.div>
        </Row>
      </Container>
    </div>
  );
}
