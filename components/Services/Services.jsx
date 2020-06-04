import { Container, Row, Col } from "react-bootstrap";

import utils from "../../pages/helpers.scss";
import css from "./Services.scss";

const Services = () => {
  return (
    <section className={`${utils.section} ${utils.lightBg}`}>
      <Container>
        <Row>
          <Col>
            <div className={`${css.mainHeading} text-center`}>
              <h2 className={css.title}>You can become a Programmer Hub</h2>
              <div class={css.subtitle}>
                <p>
                  Learn what it takes to become a problem solver, not just
                  someone that knows how to code. Build exciting projects that
                  will inspire your own.
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <Row className={utils.mt50}>
          <Col lg={4}>
            <div className={`${css.serviceBox} text-center`}>
              <div className={css.iconBox}>
                <img
                  src="../../static/thinking.png"
                  alt="Explore all possble ways"
                />
                <h3 class={css.subHeading}>Explore</h3>
                <div className={css.description}>
                  Connect with people that share new ideas
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className={`${css.serviceBox} text-center`}>
              <div className={css.iconBox}>
                <img
                  src="../../static/webinar.png"
                  alt="Explore all possble ways"
                />
                <h3 class={css.subHeading}>Engage</h3>
                <div className={css.description}>
                  Join weekly meetups to solve coding tasks
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className={`${css.serviceBox} text-center`}>
              <div className={css.iconBox}>
                <img
                  src="../../static/virtual-learn.png"
                  alt="Explore all possble ways"
                />
                <h3 class={css.subHeading}>Learn</h3>
                <div className={css.description}>
                  Learn different ways to tackle a problem
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
