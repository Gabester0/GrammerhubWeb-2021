import Link from "next/link";

import { Container, Row, Col } from "react-bootstrap";
import css from "../Shared/SocialFooter.scss";

class SocialFooter extends React.Component {
  state = {
    socials: [
      {
        icon: "mdi mdi-twitter",
        link: "#",
      },
      {
        icon: "mdi mdi-youtube",
        link: "#",
      },
      {
        icon: "mdi mdi-instagram",
        link: "#",
      },
      {
        icon: "mdi mdi-reddit",
        link: "#",
      },
    ],
  };

  render() {
    return (
      <React.Fragment>
        <section className={css.socialFooter}>
          <Container>
            <Row>
              <Col lg={12}>
                <div className="float-left">
                  <p className={`${copyright} text-muted mb-3 mb-sm-0`}>
                    2020 © GrammerHub - All Rights Reserved
                  </p>
                </div>
                <div className="float-right">
                  <ul className="list-inline m-0">
                    {/* Auto generate Social links */}
                    {this.state.socials.map((social) => (
                      <li className="list-inline-item">
                        <Link href={social.link} passHref class="social-icon">
                          <i class={social.icon}></i>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="clearfix"></div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default SocialFooter;
