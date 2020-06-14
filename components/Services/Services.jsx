import { Container, Row, Col } from "react-bootstrap";

import utils from "../../pages/helpers.scss";
import css from "./Services.scss";

const Services = () => {
  return (
    <section className={`${css.sectionSmall} ${utils.grayBg}`}>
      <Container>
        {/* <Row>
          <Col>
            <div className={`${css.mainHeading} text-center`}>
              <h2 className={css.title}>You can become a Programmer Hub</h2>
              <div className={css.subtitle}>
                <p>
                  Learn what it takes to become a problem solver, not just
                  someone that knows how to code. Build exciting projects that
                  will inspire your own.
                </p>
              </div>
            </div>
          </Col>
        </Row> */}
        <Row className={css.rowBaseline}>
          <Col sm={12} lg={4}>
            <div className={`${css.serviceBox} ${utils.mt30} text-center`}>
              <div className={css.iconBox}>
                <img
                  src="../../static/thinking.png"
                  alt="Explore all possble ways"
                />
                <h3>Explore</h3>
                <p>Connect with people that share new ideas</p>
              </div>
            </div>
          </Col>
          <Col sm={12} lg={4}>
            <div className={`${css.serviceBox} ${utils.mt30} text-center`}>
              <div className={css.iconBox}>
                <img
                  src="../../static/webinar.png"
                  alt="Explore all possble ways"
                />
                <h3>Engage</h3>
                <p>Join weekly meetups to solve coding tasks</p>
              </div>
            </div>
          </Col>
          <Col sm={12} lg={4}>
            <div className={`${css.serviceBox} ${utils.mt30} text-center`}>
              <div className={css.iconBox}>
                <img
                  src="../../static/virtual-learn.png"
                  alt="Explore all possble ways"
                />
                <h3>Learn</h3>
                <p>Learn different ways to tackle a problem</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
