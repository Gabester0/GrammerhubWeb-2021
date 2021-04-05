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
                    <p className={`${css.pb15} ${css.flexRow}`}>
                      <span className={css.flexText}>
                        Live Coding<span className={css.pipe}>|</span>
                      </span>
                      <span className={css.flexText}>
                         Dev Community<span className={css.pipe}>|</span>
                      </span>
                      <span className={css.flexText}>
                          Career Advice
                      </span>
                    </p>
                  </div>
                  <p className={`${css.ptb30} ${css.clubDesc} mx-auto`}>
                    We are pro<strong>grammers</strong>.  Founded in 2020, our mission is to provide new developers
                    a space to collaborate and level up their skills by working on live coding projects.
                  </p>
                  <div className={`${css.heroMain} ${css.pb30}`}>
                    <p>Next online event: <a id={css.nextEvent} href={events[0]?.link || 'https://www.meetup.com/grammerhub/events/'}>{nextEventDate || ""}</a></p>
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