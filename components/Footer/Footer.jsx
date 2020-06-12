import Link from "next/link";

import { Container, Row, Col } from "react-bootstrap";
import css from "./Footer.scss";

const Footer = () => {
  return (
    <div class={css.footer}>
      <Container>
        <Row>
          <Col sm="5">
            <div class={css.footerLogo}>
              <img src="https://place-hold.it/50x50" alt="Footer logo" />
              <p>
                Do remember to followed yourself material mr recurred carriage.
                High drew west we no or at john. About or given on witty event.
                Or sociable up material bachelor.
              </p>
            </div>
          </Col>
          <Col sm={{ span: 4, offset: 3 }}>
            <div class={css.footerNav}>
              <ul>
                <li>
                  <Link href="#home" passHref>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#about" passHref>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#media" passHref>
                    Last Meetups
                  </Link>
                </li>
                <li>
                  <Link href="#blog" passHref>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#calendar" passHref>
                    Calendar
                  </Link>
                </li>
                <li>
                  <Link href="#contact" passHref>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
