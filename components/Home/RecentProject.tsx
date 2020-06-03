import React from "react";


import { Container, Row, Col, Button } from "react-bootstrap";
import css from "./RecentProject.scss";






class RecentProject extends React.Component {
    render() {
      return (
        <React.Fragment>
       <section className={`${css.paddingtop}`}>
      <Container fluid className={`${css.padding}`}>
        <Row className={`${css.styling}`}>
          <Col sm={12} lg={6}>
            <div className={`${css.wrapper}mx-auto text-center`}>
              <img
                className={`${css.photo}`}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRas7_72oxxB_iiHiErRq1mrTqML3agijn5dBwNqsG1gPuYGs8_&usqp=CAU"
              ></img>
            </div>
          </Col>
          <Col sm={12} lg={6}>
            <div className={`${css.wrapper}mx-auto text-center`}>
              <h5 className={`${css.title}`}>Recent Projects</h5>
              <p className={`${css.aboutsection}`}>
                We are a young club based in Boca Raton, FL. We welcome coders
                and learners of all levels, ages and professional backgrounds.
                Our most recent collaborative app was a game of connect-four
                where our members collaborated and participated in paired
                programming to build this app using React and CSS
              </p>
              <Button className={`${css.story}`} variant="outline-dark">
                See More
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
      </section>
      </React.Fragment>
      );


    }
  }
  
  export default RecentProject;
  