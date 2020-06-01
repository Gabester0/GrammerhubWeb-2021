import React from "react";


import { Container, Row, Col, Button } from "react-bootstrap";
import css from "./AboutUs.scss";

// The first import bellow bring the react component,
// the second one, bring just the icon that we want
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";



class AboutUs extends React.Component {
    render() {
      return (
        <React.Fragment>
      
        <section className={`${css.paddingtop}`}>
          <Container fluid className={`${css.padding}`}>
            <Row>
              <Col lg={6} sm={12}>
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
    
              <Col lg={6} sm={12}>
                <div className={`${css.item}`}>
                <div className={`${css.wrapper}mx-auto px-auto text-center`}>
                  <h3 className={`${css.title}`}>About Us</h3>
                  <p className={`${css.aboutsection}`}>
                    We are Grammers. Founded in 2019 we are a club that welcomes
                    anyone who wants to learn (or level up!) their coding skills in
                    a fun, collaborative environment. Our members come from varied
                    backgrounds in tech and many other fields! We work hard and like
                    to have fun too. We meet every Monday night at 6 PM to work on
                    some React.JS apps in a collaborate, real world environment. We
                    are from all levels and would love to have you!
                  </p>
                  <Button className={`${css.story}`} variant="outline-dark">
                    Our Story
                  </Button>
                </div>
                </div>
              </Col>
         
            </Row>
          </Container>
      </section>
      </React.Fragment>
      );


    }
  }
  
  export default AboutUs;
  