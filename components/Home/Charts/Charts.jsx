import { Container, Row, Col, Button } from "react-bootstrap";

import utils from "../../Helpers.scss";
import css from "./Charts.scss";

const Charts = () => {
  return (
    <div className={`${utils.section} ${css.chartMeetup}`}>
      <Container>
        <Row>
          <Col lg={12}>
            <div className={css.describeChart}>
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
            <div className={css.sampleChart}>
              <img
                style={{maxWidth: '500px'}}
                src="../static/person-using-silver-macbook-pro-1181467.jpg"
                className="img-fluid"
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
