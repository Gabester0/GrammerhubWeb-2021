import React, { useState } from "react";
import Link from "next/link";
import axios from 'axios';

import { Container, Row, Col, Button } from "react-bootstrap";

import utils from "../Helpers.scss";
import css from "./Hero.scss";

export const Hero = ()=> {
  const [events, setEvents] = useState([]);
  const [nextEventDate, setNextEventDate] = useState(null);

  React.useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    axios.get("/grammerhub").then(({ data }) => {
      setEvents(data);
      console.log(data[0])
      const dateArr = new Date(`${data[0].local_date}T${data[0].local_time}`).toString().split("");
      dateArr.splice(dateArr.length - 4);
      //If 3rd from last char is "t" string is Eastern Daylight Time and need to splice 8 chars ("aylight ") else splice 7 chars ("avings ")
      if(dateArr[dateArr.length -3] === "t") dateArr.splice(dateArr.length - 9, 8);
      else dateArr.splice(dateArr.length - 9, 7);
      dateArr.splice(dateArr.length - 9, 7);
      dateArr.splice(dateArr.length - 13, 10);
      dateArr.splice(dateArr.length - 7, 3);
      const newHour = (parseInt(dateArr.slice(dateArr.length - 9, dateArr.length - 7).join("")) - 12).toString().padStart(2, "0");
      dateArr.splice(dateArr.length - 9, 2, newHour);
      dateArr.splice(dateArr.length - 3, 0, "PM ");
      setNextEventDate(dateArr.join(""));
    });
  }

  return (
    <React.Fragment>
      <section className={`${utils.section} ${css.h100}`}>
        <div className={css.bgOverlay}></div>
        <div className={css.displayTable}>
          <div className={css.displayTableCell}>
            <Container>
              <Row>
                <Col className="text-white text-center" lg={{ size: 8 }}>
                  <div className={css.heroMain}>
                    <h1 className={css.clubTitle}>
                      Grammerhub
                    </h1>
                  </div>
                  <p className={`${css.ptb30} ${css.clubDesc} mx-auto`}>
                    We are pro<strong>grammers</strong>.  Founded in 2020, our mission is to provide new developers
                    a space to collaborate and level up their skills by working on live coding projects.
                  </p>
                  {/*
                    -Bump of the font sizes for everything on the landing page except for the button
                    -Decide how to visually link Grammer in h1 and in strong (light purple? italics)
                    -Make sure the individual text blocks in h6 break into columns (3 separate h6 display inline?  Need to address pipes)
                  */}
                  <div className={`${css.heroMain} ${css.pb30}`}>
                    <h6>Live Coding | Dev Community | Career Advice</h6>
                    <p>Next online event: <a href={events[0]?.link || 'https://www.meetup.com/grammerhub/events/'}>{nextEventDate || ""}</a></p>
                  </div>
                  <div className={css.heroContainer}>
                    <Button 
                      bsPrefix={css.heroBtn} 
                      className="text-uppercase" 
                      href="http://bit.ly/grammerhub-slack"
                      target="_blank">
                      {"Join Our Slack"}
                    </Button>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Hero;