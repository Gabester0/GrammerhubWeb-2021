import React from "react";
import Link from "next/link";

import { Container, Row, Col, Button } from "react-bootstrap";

import utils from "../../Helpers.scss";
import css from "./Hero.scss";

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
                    <div className={css.heroMain}>
                      <h4 className={css.clubTitle}>Grammerhub</h4>
                      <h1 className={css.clubSlogan}>
                        Live. Collaborative. Coding.
                      </h1>
                    </div>
                    <p className={`${css.ptb30} ${css.clubDesc} mx-auto`}>
                      Come join us and be a ProGrammer! We meet once a week in a relaxed, welcoming and fun environment where we work on games, apps and sites. Come learn the skills to be a better developer and make your existing skills stronger. 
                    </p>

                    <div className={css.heroContainer}>
                      <Button 
                        bsPrefix={css.heroBtn} 
                        className="text-uppercase" 
                        href="http://bit.ly/grammerhub-slack"
                        target="_blank">
                        {"Join Our Slack"}
                      </Button>
                    </div>

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