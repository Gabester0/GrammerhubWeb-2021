import React from "react";
// import Layout from "../components/MyLayout";

import { Row, Container, Col, Jumbotron, Button } from "react-bootstrap";
import css from "./AboutUs.scss";

// get our fontawesome imports
// The first import bellow bring the react component,
// the second one, bring just the icon that we want
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";

import Layout from "../MyLayout";

export default () => (
  // <Layout>
    <React.Fragment>
 
      <section className={`${css.paddingtop}`}>
        <Container fluid className={`${css.padding}`}>
          <Row>
            <Col lg={4} sm={12}>
              <div className={`${css.wrapper}mx-auto text-center`}>
                <h3 className={`${css.title}`}>We are Grammers</h3>
                <p className={`${css.aboutsection}`}>
                  <FontAwesomeIcon icon={faCodeBranch} /> Learn to code
                </p>
                <p className={`${css.aboutsection}`}>
                  <FontAwesomeIcon icon={faCode} /> Have fun!{" "}
                </p>
                <p className={`${css.aboutsection}`}>
                  <FontAwesomeIcon icon={faCodeBranch} /> Build cool projects!{" "}
                </p>
              </div>
            </Col>

            <Col lg={4} sm={12}>
              <div className={`${css.wrappers}mx-auto text-center`}>
                <h3 className={`${css.title}`}>About Us</h3>
                <p className={`${css.aboutsection}`}>
                  We are Grammers. Founded in 2019 our goal is give new developers a team environment to sharpen their skills in a collaborative environment while working on real-world team projects. Our mission is for all our members to be confident in any future interview or jobs. 
                </p>
                <Button className={`${css.story}`} variant="outline-dark">
                  Our Story
                </Button>
              </div>
            </Col>
            <Col lg={4} sm={12}>
              <div className={`${css.ginny}`}>
                <img
                  className={`${css.photo}`}
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80"
                ></img>
              </div>
            </Col>
          </Row>
        </Container>

        <Container fluid className={`${css.padding}`}>
          <Row>
          <Col lg={6} sm={12}>
              <div className={`${css}`}>
                <img
                  className={`${css.photolife}`}
                  src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80">
                </img>
              </div>
            </Col>
            <Col sm={12} lg={6}>
            <div className={`${css.wrapper}mx-auto text-center`}>
                <h5 className={`${css.title}`}>News</h5>
                <p className={`${css.aboutsection}`}>
                  We are a young club based in Boca Raton, FL. We welcome coders
                  and learners of all levels, ages and professional backgrounds.
                  Our most recent collaborative app was a game of connect-four
                  where our members collaborated and participated in paired
                  programming to build this app using React and CSS
                </p>
                <Button className={`${css.story}`} variant="outline-dark">
                  Our Work
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Container fluid className={`${css.padding}`}>
        <Jumbotron fluid className={`${css.jumbo}`}>
          <h4 className={`${css.subhead}`}>Grammerhub</h4>
        </Jumbotron>
      </Container>

      <Container fluid className={`${css.padding}`}>
        <Row className={`${css.styling}`}>
          <Col sm={12} lg={6}>
            <div className={`${css.wrapper}mx-auto text-center`}>
              <img
                className={`${css.photolife}`}
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80">
              </img>
            </div>
          </Col>
          <Col sm={12} lg={6}>
            <div className={`${css.wrapper}mx-auto text-center`}>
              <h5 className={`${css.title}`}>Recent Projects</h5>
              <p className={`${css.aboutsection}`}>
                Our projects are varied and there really is something for everyone. Our weekly meet-ups recently created Connect-4 using ReactJS and are currently creating a dashboard using ExpressJS. We also have a weekly Machine Learning group where we use Python to make an automated game of Connect-4. Below you can find some cool projects we have done (so far!) 
              </p>
              <Button className={`${css.story}`} variant="outline-dark">
               Learn More
              </Button>
            </div>
          </Col>
        </Row>
      </Container>

      {/* <Container fluid className={`${css.padding}`}>
        <Row className={`${css.styling}`}>
          <Col sm={12} lg={6}>
            <div className={`${css.wrapper}mx-auto text-center`}>
              <h5 className={`${css.title}`}>Last Class </h5>
              <p className={`${css.aboutsection}`}>
                We are a young club based in Boca Raton, FL. We welcome coders
                and learners of all levels, ages and professional backgrounds.
                Our most recent collaborative app was a game of connect-four
                where our members collaborated and participated in paired
                programming to build this app using React and CSS
              </p>
              <Button className={`${css.story}`} variant="outline-dark">
                Learn More
              </Button>
            </div>
          </Col>
          <Col sm={12} lg={6}>
            <div className={`${css.wrapper}mx-auto text-center`}>
              <img
                className={`${css.photo}`}
                src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
              ></img>
            </div>
          </Col> */}

          {/* <Col sm={12} lg={6}>
            <div>
              <img
                className={`${css.photo}`}
                src="https://miro.medium.com/max/5700/1*FWgamy1ejaufuPVaiueTfw.jpeg"
              ></img>
            </div>
          </Col> */}
 
    </React.Fragment>
  // </Layout>
);
