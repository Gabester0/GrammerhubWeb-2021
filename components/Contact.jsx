import React, { Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";

import Layout from "./MyLayout";
import SectionTitle from "./Common/Sections/SectionTitle";

import utils from "../components/Helpers.scss";
import css from "../components/Contact.scss";

class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
      isFormSent: false
    }
  }

  onNameChange(event) {
    this.setState({name: event.target.value})
  }
  
  onEmailChange(event) {
    this.setState({email: event.target.value})
  }
  
  onMessageChange(event) {
    this.setState({message: event.target.value})
  }

  onSubjectChange(event) {
    this.setState({subject: event.target.value})
  }

  resetForm() {
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: '',
    })
  }
  
  handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "/contactus", 
        {text: `Website message sent by:\n
         Name: ${this.state.name}\n
         Email: ${this.state.email}\n 
         Subject: ${this.state.subject}\n
         Message: ${this.state.message}`}
      )

      if (!response.data.error){
        this.setState({isFormSent: true})
        this.resetForm()
      }else if(response.data.error){
        alert("Message failed to send.")
      }
    } catch (err) {
      console.log(err)
    }
  }
  
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
              {!this.state.isFormSent && 
                <Form onSubmit={this.handleSubmit} method="post">
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
                                value={this.state.name} 
                                onChange={this.onNameChange.bind(this)}
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
                                value={this.state.email} 
                                onChange={this.onEmailChange.bind(this)}
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
                                value={this.state.subject} 
                                onChange={this.onSubjectChange.bind(this)}
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
                                value={this.state.message} 
                                onChange={this.onMessageChange.bind(this)}
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
              } {this.state.isFormSent && 
              <div 
                className={css.confirmationMessage}
                >Thank you for contacting with us, someone will answer your message soon!
                </div>
              }
            </Container>
          </section>
        </React.Fragment>
      </Layout>
    );
  }
}

export default Contact;
