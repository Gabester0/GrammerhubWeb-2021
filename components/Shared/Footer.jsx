import Link from "next/link";

import { Container, Row, Col, Form, Input } from "react-bootstrap";
import SocialFooter from "../Shared/SocialFooter";

import utils from "../../pages/helpers.scss";
import css from "./Footer.scss";

class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      footerMenu: [
        {
          heading: "Grammerhub",

          lists: [
            {
              subHeading: "Home",
              link: "#",
            },
            {
              subHeading: "About Us",
              link: "#",
            },
            {
              subHeading: "Showcase",
              link: "#",
            },
            {
              subHeading: "Calendar",
              link: "#",
            },
            {
              subHeading: "Contact",
              link: "#",
            },
          ],
        },
        {
          heading: "Information",

          lists: [
            {
              subHeading: "Terms & Conditions",
              link: "#",
            },
            {
              subHeading: "Privacy Policy",
              link: "#",
            },
            {
              subHeading: "User Agreement",
              link: "#",
            },
            {
              subHeading: "Bookmarks",
              link: "#",
            },
          ],
        },
        {
          heading: "Support",
          lists: [
            {
              subHeading: "FAQ",
              link: "#",
            },
            {
              subHeading: "Slack",
              link: "#",
            },
            {
              subHeading: "Forum",
              link: "#",
            },
          ],
        },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <footer className={css.footer}>
          <Container>
            <Row>
              {/* Dynamic Footer Menus */}
              {this.state.footerMenu.map((block) => (
                <Col lg={3}>
                  <h4>{block.heading}</h4>

                  <div className={`${utils.mt20} text-muted`}>
                    <ul className={`${css.subMenus} list-unstyled`}>
                      {/* Dynamic Footer Navigation */}
                      {block.lists.map((url) => (
                        <li>
                          <Link href={url.link} passHref>
                            {url.subHeading}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Col>
              ))}

              <Col lg={3}>
                <h4>Subscribe</h4>
                <div className={`${utils.mt20} text-muted`}>
                  <p>
                    You would receive our upcoming newsletter, with helpful info
                    in how to create your own projects, React cheat sheet, and
                    trivia questions.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
