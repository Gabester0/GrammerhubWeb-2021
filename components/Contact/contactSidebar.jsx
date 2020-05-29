import React from "react";
import { Row, Col } from "react-bootstrap";
import css from "./assets/css/contact/social-sidebar.scss";
// import ContactSocial from "./contactSocial";

class ContactSidebar extends React.Component {
  render() {
    return (
      <Col lg="4" md="12">
        <div className={css.leaveMessage}>
          <h3>Have any Suggestion on improving coding lessons? </h3>
          <p>
            If you have any questions about the services we provide simply use
            the form below. We try and respond to all queries and comments
            within 24 hours.
          </p>
          <div className={css.keepContact}>
            <h3>Reach Us Out in Social</h3>
            {/* <ContactSocial /> */}
          </div>
        </div>
      </Col>
    );
  }
}

export default ContactSidebar;
