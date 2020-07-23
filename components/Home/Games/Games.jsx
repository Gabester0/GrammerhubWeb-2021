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
             Learn how to visualize, plan and create a full-functional board game from scratch.. so you can be ready to play with your friends!
              </p>
            
            </div>
            <div className={css.sampleGame}>
              <img
                style={{maxWidth: '500px'}}
                src="../static/office-working-app-computer-97077.jpg"
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
