import React from "react";
import Layout from "../components/MyLayout";
import axios from "axios";
import MyCalendar from "../components/MyCalendar";
import "../node_modules/react-big-calendar/lib/css/react-big-calendar.css";
import { MeetupEvent } from "../service/eventModel";
import css from "./assets/css/calendar/calendar.scss";
import EventListItem from "../components/EventListItem";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default () => {

  // ------------ HOOKS ------------- //
  const [events, setEvents] = React.useState<MeetupEvent[]>([]);
  const [searchTerm, setSearchTerm] = React.useState<string>('');
  const [filtered, setFiltered] = React.useState<MeetupEvent[]>([]);

  // ON LOAD GET EVENTS FROM MEETUP
  React.useEffect(() => {
    fetchData();
  }, []);
  
  // WHEN searchTerm CHANGES AND ITS GREATERT THAN 3 FILTER EVENTS
  React.useEffect(() => {
    filter();
  }, [searchTerm])

  // ----------- FUNCTIONS ------------- //
  // ASYNC GET EVENTS FROM MEETUP USING THE BACK END
  async function fetchData() {
    axios.get("/grammerhub").then((res) => {
      setEvents(res.data);
      setFiltered(res.data);
    });
  }

  const filter = () => {
    if (searchTerm.length < 3) return;
    const results = events.filter(event => JSON.stringify(event).toLowerCase().includes(searchTerm));
    setFiltered(results);
  }

  // --------- HANDLERS ----------- ///
  const handleChange = event => {
    if (event.target.value === '' && event.target.value.length < searchTerm.length) setFiltered(events);
    setSearchTerm(event.target.value);
  }

  const handleClick = event => {
    filter();
  }

  return (
    <Layout>
      <Row className={css.layoutStyle}>
        <Col className={css.leftSide}>
          <div className={css.eventHeader}>Events List</div>
          <label className={css.labelSearch}>
            Search: 
            <input 
              type="text" 
              name="searchBar" 
              placeholder="filter"
              className={css.searchInput}
              value={searchTerm} 
              onInput={handleChange}></input>
              <button type="submit" onClick={handleClick}><FontAwesomeIcon icon={faSearch} /></button>
           </label>
          <div className={css.eventList}>
            {filtered.map((event, index) => {
              return (
                <EventListItem event={event} index={index}></EventListItem>
              );
            })}
          </div>
        </Col>
        <Col className={css.rightSide}>
          <MyCalendar events={filtered} />
        </Col>
      </Row>
    </Layout>
  );
};

