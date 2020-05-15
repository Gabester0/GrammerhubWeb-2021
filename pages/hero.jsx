import React from "react";
import Link from "next/link";

import { Container, Row, Col, Button } from "react-bootstrap";
import css from "./assets/css/hero/home-hero.scss";

class Hero extends React.Component {
  render() {
    return (
      <section className={css.alignHero}>
        <Container>
          <Row className="justify-content-center align-items-center">
            <Col md={10} sm={12}>
              <div className="text-center">
                <h4 className={`${css.marginBottom} text-white text-uppercase`}>
                  Welcome to Grammerhub
                </h4>
                <h1 className="text-uppercase text-white">
                  virtual live coding sessions
                </h1>
                <p className="text-white">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod temp <br />
                  or incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim
                </p>
                <Button bsPrefix={css.heroBtn} className="text-uppercase">
                  {"Learn More"}
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default Hero;
