import React from "react";


import { Container, Row, Col, Button } from "react-bootstrap";
import css from "./News.scss";






class News extends React.Component {
    render() {
      return (
        <React.Fragment>
       <section className={`${css.paddingtop}`}>
      <Container fluid className={`${css.padding}`}>
          <Row className={`${css.styling}`}>
            <Col sm={12} lg={6}>
            <div className={`${css.item}`}>
              <div className={`${css.wrapper}mx-auto text-center`}>
                <img
                  className={`${css.photo}`}
                  src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                ></img>
              </div>
              </div>
            </Col>
            <Col sm={12} lg={6}>
            <div className={`${css.item}`}>
              <div className={`${css.ginny}`}>
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
              </div>
            </Col>
          </Row>
        </Container>
        </section>
      </React.Fragment>
      );


    }
  }
  
  export default News;
  