import React, { Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

import Layout from "../components/MyLayout";
import SectionTitle from "../components/Common/Sections/SectionTitle";

import utils from "../components/Helpers.scss";
import css from "../components/Contact.scss";

class Contact extends Component {
  render() {
    return (
      <Layout>
        <React.Fragment>
          <section className={utils.section} id="contact">
            <Container>
              <SectionTitle
                title="Contact Us"
                description="Tell us how was your experience with Grammerhub Meetups."
              />
              <Form>
                <Row>
                  <Col lg={{ span: 8, offset: 2 }}>
                    <div className="mt-4 pt-4">
                      <Row>
                        <Col lg={6}>
                          <Form.Group>
                            <Form.Control
                              className={utils.formControl}
                              type="text"
                              name="name"
                              id="name"
                              placeholder="Your Name..."
                            />
                          </Form.Group>
                        </Col>
                        <Col lg={6}>
                          <Form.Group>
                            <Form.Control
                              className={utils.formControl}
                              type="email"
                              name="email"
                              id="email"
                              placeholder="Your Email..."
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={12} className="mt-2">
                          <Form.Group>
                            <Form.Control
                              className={utils.formControl}
                              type="text"
                              name="subject"
                              id="subject"
                              placeholder="Your Subject..."
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={12} className="mt-2">
                          <Form.Group>
                            <Form.Control
                              className={`${utils.formControl} ${utils.textarea}`}
                              as="textarea"
                              col="20"
                              rows="4"
                              id="message"
                              placeholder="Your Message here..."
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={12} className="text-right">
                          <Button
                            type="submit"
                            bsPrefix={`${utils.btn} ${css.btnContact}`}
                          >
                            {"Send Now"}
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>
              </Form>
            </Container>
          </section>
        </React.Fragment>
      </Layout>
    );
  }
}

export default Contact;
