import React from "react";

import { Container, Row, Col, Form, Button } from "react-bootstrap";
import css from "./assets/css/contact/contact-page.scss";
import ContactSidebar from "./contactSidebar";
import ContactForm from "./contactForm";

class Contact extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className={css.contactWrapper}>
          <Container>
            <Row
              className="h-100"
              className="align-items-center"
              className={css.contactForm}
            >
              <ContactSidebar />
              <ContactForm />
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Contact;
