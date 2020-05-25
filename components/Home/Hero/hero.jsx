import React from "react";
import Link from "next/link";

import { Container, Row, Col, Button } from "react-bootstrap";

import utils from "../../../pages/helpers.scss";
import css from "./hero.scss";

class Hero extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className={`${utils.section} ${css.h100}`}>
          <div className={css.bgOverlay}></div>
          <div className={css.displayTable}>
            <div className={css.displayTableCell}>
              <Container>
                <Row>
                  <Col className="text-white text-center" lg={{ size: 8 }}>
                    <h4 className={css.clubTitle}>Grammerhub</h4>
                    <h1 classname={css.clubSlogan}>
                      Virtual Live Coding Sessions
                    </h1>
                    <p className={`${css.ptb30} ${css.clubDesc} mx-auto`}>
                      Come and join us to learn the skills that would make you a
                      better developer. We offer hands on peer review while we
                      code games and sites.
                    </p>
                    <Button bsPrefix={css.heroBtn} className="text-uppercase">
                      {"Join Our Slack"}
                    </Button>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Hero;
