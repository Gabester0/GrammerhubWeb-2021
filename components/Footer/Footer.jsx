import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import css from "./Footer.scss";

const Footer = () => {
  return (
    <div className={css.footer}>
      <Container>
        <Row>
          <Col sm="5">
            <div className={css.footerLogo}>
              <img src="https://place-hold.it/50x50" alt="Footer logo" />
              <p>
                Do remember to followed yourself material mr recurred carriage.
                High drew west we no or at john. About or given on witty event.
                Or sociable up material bachelor.
              </p>
            </div>
          </Col>
          <Col sm={{ span: 4, offset: 3 }}>
            <div className={css.footerNav}>
              <ul>
                <li>
                  <Link href="/home" passHref>
                    <a>Home</a>
                  </Link>
                </li>
                <li>
                  <Link href="/about" passHref>
                    <a>About Us</a>
                  </Link>
                </li>
                <li>
                  <Link href="/media" passHref>
                    <a>Last Meetups</a>
                  </Link>
                </li>
                <li>
                  <Link href="/blog" passHref>
                    <a>Blog</a>
                  </Link>
                </li>
                <li>
                  <Link href="/calendar" passHref>
                    <a>Calendar</a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact" passHref>
                    <a>Contact</a>
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
