import React from "react";


import { Container, Row, Col, Button, Jumbotron } from "react-bootstrap";
import css from "./Separate.scss";






class Separate extends React.Component {
    render() {
      return (
        <React.Fragment>
      
      <Container fluid className={`${css.padding}`}>
        <Jumbotron fluid className={`${css.jumbo}`}>
         
        </Jumbotron>
      </Container>
      </React.Fragment>
      );


    }
  }
  
  export default Separate;
  