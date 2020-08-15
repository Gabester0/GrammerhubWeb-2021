import { Container, Row, Col } from "react-bootstrap";

import utils from "../Helpers.scss";
import css from "./Services.scss";

interface IImage {
  url: string
  alt: string
}

export interface IServiceProps {
  img: IImage
  title: string
  text: string
}

const serviceArr: IServiceProps[] = [
  {
    img: { url: "../../static/thinking.png", alt: "Explore all possble ways" },
    title: "Explore",
    text: "Connect with people that share new ideas",
  },
  {
    img: { url: "../../static/webinar.png", alt: "Explore all possble ways" },
    title: "Engage",
    text: "Join weekly meetups to solve coding tasks",
  },
  {
    img: { url: "../../static/virtual-learn.png", alt: "Explore all possble ways" },
    title: "Learn",
    text: "Learn different ways to tackle a problem",
  },
]

const Service = (props: IServiceProps) => {
  return (
    <Col sm={12} lg={4}>
      <div className={`${css.serviceBox} ${utils.mt30} text-center`}>
        <div className={css.iconBox}>
          <img
            src={props.img.url}
            alt={props.img.alt}
          />
          <h3>{props.title}</h3>
          <p>{props.text}</p>
        </div>
      </div>
    </Col>
  )
}

const Services = () => {
  return (
    <section className={`${css.sectionSmall} ${utils.grayBg}`}>
      <Container>
        {/* <Row>
          <Col>
            <div className={`${css.mainHeading} text-center`}>
              <h2 className={css.title}>You can become a Programmer Hub</h2>
              <div className={css.subtitle}>
                <p>
                  Learn what it takes to become a problem solver, not just
                  someone that knows how to code. Build exciting projects that
                  will inspire your own.
                </p>
              </div>
            </div>
          </Col>
        </Row> */}
        {/* ================================================================= */}
        {/* <Row className={css.rowBaseline}>
          <Col sm={12} lg={4}>
            <div className={`${css.serviceBox} ${utils.mt30} text-center`}>
              <div className={css.iconBox}>
                <img
                  src="../../static/thinking.png"
                  alt="Explore all possble ways"
                />
                <h3>Explore</h3>
                <p>Connect with people that share new ideas</p>
              </div>
            </div>
          </Col>
          <Col sm={12} lg={4}>
            <div className={`${css.serviceBox} ${utils.mt30} text-center`}>
              <div className={css.iconBox}>
                <img
                  src="../../static/webinar.png"
                  alt="Explore all possble ways"
                />
                <h3>Engage</h3>
                <p>Join weekly meetups to solve coding tasks</p>
              </div>
            </div>
          </Col>
          <Col sm={12} lg={4}>
            <div className={`${css.serviceBox} ${utils.mt30} text-center`}>
              <div className={css.iconBox}>
                <img
                  src="../../static/virtual-learn.png"
                  alt="Explore all possble ways"
                />
                <h3>Learn</h3>
                <p>Learn different ways to tackle a problem</p>
              </div>
            </div>
          </Col>
        </Row> */}
        <Row className={css.rowBaseline}>
          {serviceArr.map((srv: IServiceProps, i: number) => {
            return <Service key={i} {...srv} />
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
