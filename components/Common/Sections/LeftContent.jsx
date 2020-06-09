import { Container, Row, Col } from "react-bootstrap";
import utils from "../../../pages/helpers.scss";
import css from "../../../pages/about.scss";

const LeftContent = () => {
  return (
    <React.Fragment>
      <section className={utils.section}>
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className={`${utils.featureBox} ${utils.mt5}`}>
                <h3>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent rutrum.
                </h3>
                <ul
                  className={`${utils.mt30} ${utils.listItems} list-unstyled`}
                >
                  <li>
                    Neque porro quisquam est qui dolorem ipsum quia dolor sit
                    amet.
                  </li>
                  <li>
                    Neque porro quisquam est qui dolorem ipsum quia dolor sit
                    amet.
                  </li>
                  <li>
                    Neque porro quisquam est qui dolorem ipsum quia dolor sit
                    amet.
                  </li>
                  <li>
                    Neque porro quisquam est qui dolorem ipsum quia dolor sit
                    amet.
                  </li>
                  <li>
                    Neque porro quisquam est qui dolorem ipsum quia dolor sit
                    amet.
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={4}>
              <img
                className={`${utils.sizePhoto}`}
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80"
              ></img>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default LeftContent;
