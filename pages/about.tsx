  
import React from "react";
// import Layout from "../components/MyLayout";

import { Row, Container, Col, Jumbotron, Button } from "react-bootstrap";
import css from "../pages/about.scss";



import Layout from "../components/MyLayout";
import AboutUs from "../components/Home/AboutUs";
import News from "../components/Home/News";
import Separate from "../components/Home/Separate";
import LastClass from "../components/Home/LastClass";

export default () => (
  <Layout>
  < AboutUs />
  < News />
  <Separate />
  <LastClass />
  

    

  </Layout>
);