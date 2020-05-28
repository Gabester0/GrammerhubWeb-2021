// import Layout from "../components/MyLayout";

import { Row, Container, Col, Jumbotron, Button } from "react-bootstrap";
import css from "./about.scss";

import Hero from "../components/Home/Hero/hero";
import Footer from "../components/Shared/footer";

// get our fontawesome imports
// The first import bellow bring the react component,
// the second one, bring just the icon that we want
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";

import LastMeetups from "../components/Meetups/lastMeetups";
import LeftContent from "../components/Common/Sections/leftContent";
import Services from "../components/Services/services";

export default () => (
  <React.Fragment>
    <Hero />
    <Services />
    <LeftContent />
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
            <div className={`${css.wrapper}mx-auto text-center`}>
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
        <Row className={`${css.styling}`}>
          <Col sm={12} lg={6}>
            <div className={`${css.wrapper}mx-auto text-center`}>
              <img
                className={`${css.photo}`}
                src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
              ></img>
            </div>
          </Col>
          <Col sm={12} lg={6}>
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
              className={`${css.photo}`}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRas7_72oxxB_iiHiErRq1mrTqML3agijn5dBwNqsG1gPuYGs8_&usqp=CAU"
            ></img>
          </div>
        </Col>
        <Col sm={12} lg={6}>
          <div className={`${css.wrapper}mx-auto text-center`}>
            <h5 className={`${css.title}`}>Recent Projects</h5>
            <p className={`${css.aboutsection}`}>
              We are a young club based in Boca Raton, FL. We welcome coders and
              learners of all levels, ages and professional backgrounds. Our
              most recent collaborative app was a game of connect-four where our
              members collaborated and participated in paired programming to
              build this app using React and CSS
            </p>
            <Button className={`${css.story}`} variant="outline-dark">
              See More
            </Button>
          </div>
        </Col>
      </Row>
    </Container>

    <Container fluid className={`${css.padding}`}>
      <Row className={`${css.styling}`}>
        <Col sm={12} lg={6}>
          <div className={`${css.wrapper}mx-auto text-center`}>
            <h5 className={`${css.title}`}>Last Class </h5>
            <p className={`${css.aboutsection}`}>
              We are a young club based in Boca Raton, FL. We welcome coders and
              learners of all levels, ages and professional backgrounds. Our
              most recent collaborative app was a game of connect-four where our
              members collaborated and participated in paired programming to
              build this app using React and CSS
            </p>
            <Button className={`${css.story}`} variant="outline-dark">
              Learn More
            </Button>
          </div>
        </Col>

        <Col sm={12} lg={6}>
          <div>
            <img
              className={`${css.photo}`}
              src="https://miro.medium.com/max/5700/1*FWgamy1ejaufuPVaiueTfw.jpeg"
            ></img>
          </div>
        </Col>
      </Row>
    </Container>
    <Footer />
  </React.Fragment>
);
