import React from "react";
import Link from "next/link";
import axios from 'axios';

import { Container, Row, Col, Button } from "react-bootstrap";

import utils from "../Helpers.scss";
import css from "./Hero.scss";

export const Hero = ()=> {

  const [events, setEvents] = React.useState([]);
  React.useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    axios.get("/grammerhub").then((res) => {
      setEvents(res.data);
      console.log(res.data)
    });
  }

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
                    <h1 className={css.clubTitle}>
                      Grammerhub
                    </h1>
                  </div>
                  <p className={`${css.ptb30} ${css.clubDesc} mx-auto`}>
                    We are pro<strong>grammers</strong>.  Founded in 2020, our mission is to provide new developers
                    a space to collaborate and level up their skills by working on live coding projects.
                  </p>
                  {/*
                    -Bump of the font sizes for everything on the landing page except for the button
                    -Decide how to visually link Grammer in h1 and in strong (light purple? italics)
                    -Make sure the individual text blocks in h6 break into columns (3 separate h6 display inline?  Need to address pipes)
                    -Add events[0] (next event) to Hero
                  */}
                  <div className={`${css.heroMain} ${css.pb30}`}>
                    <h6>Live Coding | Dev Community | Career Advice</h6>
                  </div>

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

export default Hero;