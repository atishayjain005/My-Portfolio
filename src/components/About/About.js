/** @jsxImportSource @emotion/react */
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import * as styles from "./About.styles";

export default function About() {
  return (
    <div>
      <div css={styles.blocks}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#212529"
            fillOpacity="1"
            d="M0,288L0,128L84.7,128L84.7,288L169.4,288L169.4,224L254.1,224L254.1,160L338.8,160L338.8,288L423.5,288L423.5,160L508.2,160L508.2,160L592.9,160L592.9,288L677.6,288L677.6,64L762.4,64L762.4,128L847.1,128L847.1,256L931.8,256L931.8,32L1016.5,32L1016.5,96L1101.2,96L1101.2,160L1185.9,160L1185.9,32L1270.6,32L1270.6,32L1355.3,32L1355.3,192L1440,192L1440,0L1355.3,0L1355.3,0L1270.6,0L1270.6,0L1185.9,0L1185.9,0L1101.2,0L1101.2,0L1016.5,0L1016.5,0L931.8,0L931.8,0L847.1,0L847.1,0L762.4,0L762.4,0L677.6,0L677.6,0L592.9,0L592.9,0L508.2,0L508.2,0L423.5,0L423.5,0L338.8,0L338.8,0L254.1,0L254.1,0L169.4,0L169.4,0L84.7,0L84.7,0L0,0L0,0Z"
          ></path>
        </svg>
      </div>
      <div css={styles.wrapper}>
        <Container>
          <Row>
            <Col className=" py-5" md={6}>
              <h1
                className="text-uppercase fw-bold  text-end mb-5"
                css={styles.bigText}
              >
                About
              </h1>
              <div>
                <h4 className="card bg-dark text-light  fw-light h-50 p-5">
                  Magna adipisicing esse ipsum magna in. Do laboris aliquip elit
                  est id in non amet duis cillum sint culpa ipsum cupidatat.
                  Cupidatat ea dolor consequat labore commodo ad exercitation
                  ipsum consectetur sint aliqua aliqua id culpa. Id pariatur
                  excepteur enim ipsum nisi elit. Minim est duis labore fugiat
                  exercitation irure enim pariatur. Labore aliqua culpa amet
                  nostrud ipsum ipsum nisi. Duis laborum sit magna cupidatat
                  nulla cupidatat aute enim veniam aliqua irure pariatur do
                  reprehenderit.
                </h4>
              </div>
            </Col>
            <Col className=" py-5" md={6}>
              <h1 className="text-uppercase  fw-bold  mb-5" css={styles.bigText}>
                <br />
                Me
              </h1>
              <div>
                <h4 className="card bg-dark text-light  fw-light h-50 p-5">
                  Magna adipisicing esse ipsum magna in. Do laboris aliquip elit
                  est id in non amet duis cillum sint culpa ipsum cupidatat.
                  Cupidatat ea dolor consequat labore commodo ad exercitation
                  ipsum consectetur sint aliqua aliqua id culpa. Id pariatur
                  excepteur enim ipsum nisi elit. Minim est duis labore fugiat
                  exercitation irure enim pariatur. Labore aliqua culpa amet
                  nostrud ipsum ipsum nisi. Duis laborum sit magna cupidatat
                  nulla cupidatat aute enim veniam aliqua irure pariatur do
                  reprehenderit.
                </h4>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
