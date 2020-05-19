import React from "react";

import { Container, Row, Col, Form, Button } from "react-bootstrap";
import css from "./assets/css/contact/contact-page.scss";
// import ContactSidebar from "./contactSidebar";
// import ContactForm from "./contactForm";

class Contact extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className={css.contactWrapper}>
          <Container>
            <Form className={css.contactForm}>
              <div className={`${css.contactTitle} text-center mb-5`}>
                <span class="sub-title mb-2 d-block">Get In Touch</span>
                <h2 class={`${css.subtitle} text-primary`}>Contact Us</h2>
              </div>
              <Row className="mb-4">
                <Col md={6} className="mb-4 mb-md-0">
                  <Form.Control
                    type="text"
                    name="firstname"
                    id="firstname"
                    placeholder="Your First Name"
                  />
                </Col>
                <Col md={6}>
                  <Form.Control
                    type="text"
                    name="lastname"
                    id="lastname"
                    placeholder="Your Last Name"
                  />
                </Col>
              </Row>
              <Row className="mb-4">
                <Col md={12}>
                  <Form.Control
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Your Email Address"
                  />
                </Col>
              </Row>
              <Row className="mb-4">
                <Col md={12}>
                  <Form.Control
                    as="textarea"
                    cols="30"
                    rows="10"
                    id="message"
                    placeholder="Write your Message here"
                  />
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <Button type="submit" variant="primary" size="md">
                    {"Send Now"}
                  </Button>
                </Col>
              </Row>
            </Form>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

export default Contact;
