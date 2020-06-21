import { Container, Row, Col, Button } from "react-bootstrap";

import utils from "../../Helpers.scss";
import css from "./Games.scss";

const Games = () => {
  return (
    <div className={`${utils.section} ${css.sectionPad}`}>
      <Container>
        <Row>
          <Col lg={12}>
            <div className={css.describeGames}>
              <h4>Visualize board games as you code</h4>
              <h2>Learn how to write algorithms from scratch</h2>
              <p>
                I don't know what to type here so let me fill some random text.
                Lorem ipsum is hard to consume and I use it as a last resort.
                This text needs to be changed.
              </p>
              <p>
                I'll fill random text please and you don't even have to read it.
              </p>
            </div>
            <div className={css.sampleGame}>
              <img
                src="https://place-hold.it/400x300"
                className="img-fluid"
                alt="Connect 4"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Games;
