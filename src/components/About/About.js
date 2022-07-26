/** @jsxImportSource @emotion/react */
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import * as styles from "./About.styles";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const data = {
  main: "In cillum labore velit incididunt anim est id Minim enim eiusmod labore qui incididunt commodo reprehenderit. Ad est ipsum irure exercitation tempor est id ea dolor consequat ut quis voluptate dolore. Officia aliqua exercitation ullamco amet.",
  subData: [
    {
      content:
        "Dolore nostrud excepteur dolore enim. In labore velit ut pariatur. Anim ipsum aliquip anim Lorem excepteur. Proident ullamco dolor nostrud reprehenderit. Nulla nisi proident deserunt ex commodo aliquip est non eiusmod nulla reprehenderit nisi ut adipisicing.",
    },
    {
      content:
        "Commodo exercitation ea nisi sint. Labore cillum mollit ea esse cupidatat proident esse dolore deserunt eu. Non labore magna tempor duis est anim eu nulla quis ad sint qui veniam nisi. Id incididunt id ut quis dolor reprehenderit id aute exercitation. Elit reprehenderit sunt quis tempor deserunt consectetur exercitation non aliquip. Et excepteur excepteur do exercitation ex fugiat eiusmod.",
    },
  ],
};

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
      <div css={styles.wrapper} className="py-5" id="about">
        <Container>
          <Row>
            <Col className=" py-5">
              <h1
                css={styles.bigText}
                className="text-uppercase text-center fw-bold"
              >
                About Me
              </h1>
              <div className="py-5">
                <h1 className="fw-light" css={styles.cursiveText}>
                  <FontAwesomeIcon icon={faQuoteLeft} />
                  &nbsp;&nbsp;{data.main}&nbsp;&nbsp;
                  <FontAwesomeIcon icon={faQuoteRight} />
                </h1>
              </div>
              <div className="row gap-5 justify-content-evenly py-5 ">
                {data.subData.map((cntnt, index) => (
                  <div
                    key={index}
                    className="card col-sm shadow-lg p-5 rounded-3"
                  >
                    {cntnt.content}
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
