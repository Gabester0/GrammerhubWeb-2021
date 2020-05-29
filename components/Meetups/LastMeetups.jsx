import { Container, Row, Col } from "react-bootstrap";
import utils from "../../pages/helpers.scss";
import css from "./LastMeetups.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const LastMeetups = () => {
  return (
    <React.Fragment>
      <section className={`${utils.section} ${utils.lightBg}`}>
        <Container>
          <Row>
            <Col lg={12}>
              <div className={`${utils.mainTitles} ${utils.mt20}`}>
                <h2 className="text-center">Last Meetups</h2>
              </div>
            </Col>
          </Row>
          <Row className={utils.mt30}>
            <Col lg={4}>
              <div className={utils.featureBox}>
                <p>
                  Morbi efficitur vitae orci eu volutpat. Donec nulla justo,
                  dapibus sed sodales ut, auctor a ante. Integer nec libero
                  vitae nisi consectetur rhoncus id eget mi.
                </p>
              </div>
            </Col>
            <Col lg={4}>
              <div className={utils.featureBox}>
                <p>
                  Morbi efficitur vitae orci eu volutpat. Donec nulla justo,
                  dapibus sed sodales ut, auctor a ante. Integer nec libero
                  vitae nisi consectetur rhoncus id eget mi.
                </p>
              </div>
            </Col>
            <Col lg={4}>
              <div className={utils.featureBox}>
                <p>
                  Morbi efficitur vitae orci eu volutpat. Donec nulla justo,
                  dapibus sed sodales ut, auctor a ante. Integer nec libero
                  vitae nisi consectetur rhoncus id eget mi.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default LastMeetups;
