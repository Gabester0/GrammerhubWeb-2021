import { Container, Row, Col, Button } from "react-bootstrap";

import utils from "../../../pages/helpers.scss";
import css from "./Charts.scss";

const Charts = () => {
  return (
    <div class={`${utils.section} ${css.chartMeetup}`}>
      <Container>
        <Row>
          <Col lg={12}>
            <div class={css.describeChart}>
              <h4>Build charts on a Dashboard</h4>
              <h2>Learn how to use open source libraries.</h2>
              <p>
                I don't know what to type here so let me fill some random text.
                <br />
                Lorem ipsum is hard to consume and I use it as a last resort.
              </p>
              <p>
                I don't know what to type here so let me fill some random text.
                <br />
                Lorem ipsum is hard to consume and I use it as a last resort.
              </p>
              <Button type="submit" bsPrefix={`${css.btnGlow}`}>
                {"Seek More"}
              </Button>
            </div>
            <div class={css.sampleChart}>
              <img
                src="https://place-hold.it/400x300"
                class="img-fluid"
                alt="Doghnut Chart"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Charts;
