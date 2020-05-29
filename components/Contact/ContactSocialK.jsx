import React from "react";
import Link from "next/link";

class ContactSocial extends React.Component {
  render() {
    return (
      <ul>
        <li>
          <Link href="#" target="_blank">
            <i className="icofont-facebook"></i>
            <span>Facebook</span>
          </Link>
        </li>
        <li>
          <Link href="#" target="_blank">
            <i className="icofont-twitter"></i>
            <span>Twitter</span>
          </Link>
        </li>
        <li>
          <Link to="#" target="_blank">
            <i className="icofont-instagram"></i>
            <span>Instagram</span>
          </Link>
        </li>
        <li>
          <Link to="#" target="_blank">
            <i className="icofont-linkedin"></i>
            <span>Linkedin</span>
          </Link>
        </li>
      </ul>
    );
  }
}

export default ContactSocial;
