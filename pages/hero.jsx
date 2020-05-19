import React from "react";
import Link from "next/link";

import { Container } from "react-bootstrap";
import css from "./assets/css/hero/home-hero.scss";

class Hero extends React.Component {
  render() {
    return (
      <div className={css.heroWrapper}>
        {/* These are bootstrap classes that works
            like utilities. See breakpoints in docs */}
        <div className="d-table">
          <div className="d-table-cell">
            <Container>
              <div className={css.heading}>
                <p>
                  Do you want to <span> learn </span> to code?
                </p>
                <h1>
                  Level Up Your <span>Grammerhub</span> <br /> Skills &nbsp;
                  <strong>2</strong>
                  <strong>0</strong>
                  <strong>2</strong>
                  <strong>0</strong>
                </h1>
                <ul>
                  <li>
                    <i className="icofont-calendar"></i>Virtual Group Coding
                    Nights
                  </li>
                </ul>
              </div>
            </Container>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
