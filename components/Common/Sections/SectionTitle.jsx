import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

import utils from "../../../pages/helpers.scss";
class SectionTitle extends Component {
  render() {
    return (
      <React.Fragment>
        <Row>
          <Col lg={{ span: 8, offset: 2 }}>
            <h1 className={`${utils.sectionTitle} text-center`}>
              {this.props.title}
            </h1>
            <div className={`${utils.sectionBorder}`}>
              <p
                className={`${utils.subTitle} ${utils.pt30} text-muted text-center`}
              >
                {this.props.description}
              </p>
            </div>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default SectionTitle;
