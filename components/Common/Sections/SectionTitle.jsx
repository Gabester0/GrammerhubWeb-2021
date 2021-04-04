import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

import utils from "../../Helpers.scss";
class SectionTitle extends Component {
  render() {
    return (
      <React.Fragment>
        <Row>
          <Col lg={{ span: 8, offset: 2 }}>
            <h2 className={`${utils.sectionTitle} text-center`}>
              {this.props.title}
            </h2>
            <div className={`${utils.sectionBorder}`}>
              <p className={`${utils.subTitle} text-muted text-center`}>
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
