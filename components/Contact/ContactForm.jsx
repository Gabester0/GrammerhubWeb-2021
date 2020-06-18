import React from "react";
import { Col, Row, Form, Button } from "react-bootstrap";

class ContactForm extends React.Component {
  render() {
    return (
      <Col lg="8" md="12">
        <Form id="contactForm">
          <Row>
            <Col lg="6" md="6">
              <Form.Group>
                <Form.Label htmlFor="name">Your Name*</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Please enter your full name"
                />
              </Form.Group>
            </Col>
            <Col lg="6" md="6">
              <Form.Group>
                <Form.Label htmlFor="email">Email*</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Please enter your email"
                />
              </Form.Group>
            </Col>
            <Col lg="12" md="12">
              <Form.Group>
                <Form.Label htmlFor="phone">Phone Number*</Form.Label>
                <Form.Control
                  type="text"
                  name="number"
                  id="number"
                  placeholder="Please enter your Number"
                />
              </Form.Group>
            </Col>
            <Col lg="12" md="12">
              <Form.Group>
                <Form.Label htmlFor="message">Message*</Form.Label>
                <Form.Control
                  as="textarea"
                  cols="30"
                  rows="4"
                  id="message"
                  placeholder="Please enter your message"
                />
              </Form.Group>
            </Col>

            <Col lg="12" md="12">
              <Button type="submit" variant="primary">
                {"Send Now"}
              </Button>
            </Col>
          </Row>
        </Form>
      </Col>
    );
  }
}

export default ContactForm;
