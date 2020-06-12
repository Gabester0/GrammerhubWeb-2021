import { Container, Row, Col } from "react-bootstrap";

// import utils from "../../pages/helpers.scss";
import css from "./Meetups.scss";

const Meetups = () => {
  return (
    <div className={css.meetupsWrapper}>
      <Container>
        <Row>
          <Col>
            <div className={`${css.subHeading} text-center`}>
              <h4>What We Do</h4>
              <h2>Learn to code the practical way</h2>
              <p>
                Follow along with different ways to tackle a problem, break down
                into steps. <br /> See how the code looks like in example
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={4} sm={12}>
            <div className={css.summaryBox}>
              <div className={css.summaryPic}>
                <img src="../../static/thinking.png" width="65" alt="Icon 1" />
              </div>
              <div className={css.summaryInfo}>
                <h2>Explore</h2>
                <p>
                  Type some text that relates to the above unrelated heading you
                  just typed now to make it look good.
                </p>
              </div>
            </div>
          </Col>
          <Col md={4} sm={12}>
            <div className={css.summaryBox}>
              <div className={css.summaryPic}>
                <img src="../../static/webinar.png" width="65" alt="Icon 2" />
              </div>
              <div className={css.summaryInfo}>
                <h2>Connect</h2>
                <p>
                  Type some text that relates to the above unrelated heading you
                  just typed now to make it look good.
                </p>
              </div>
            </div>
          </Col>
          <Col md={4} sm={12}>
            <div className={css.summaryBox}>
              <div className={css.summaryPic}>
                <img
                  src="../../static/virtual-learn.png"
                  width="65"
                  alt="Icon 3"
                />
              </div>
              <div className={css.summaryInfo}>
                <h2>Practice</h2>
                <p>
                  Type some text that relates to the above unrelated heading you
                  just typed now to make it look good.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Meetups;
