import React from "react";
import { Calendar, Views, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { MeetupEvent } from "service/eventModel";
import Layout from "./MyLayout";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EventListItem from "./EventListItem";
import "../node_modules/react-big-calendar/lib/css/react-big-calendar.css";
// import "./calender-styles.global.scss"
import css from '../components/MyCalendar.scss'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Head from "next/head";

const localizer = momentLocalizer(moment);
const allViews = Object.keys(Views).map((k) => Views[k]);

const ColoredDateCellWrapper = ({ children }) =>
  React.cloneElement(React.Children.only(children), {
    style: {
      backgroundColor: "rgb(169, 106, 241)",
    },
  });

const MyCalendar = (props) => {

  // ------------ HOOKS ------------- //
  const [events, setEvents] = React.useState<MeetupEvent[]>([]);
  const [searchTerm, setSearchTerm] = React.useState<string>('');
  const [filtered, setFiltered] = React.useState<MeetupEvent[]>([]);

  // ON LOAD GET EVENTS FROM MEETUP
  React.useEffect(() => {
    fetchData();
    setFiltered(events);
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
    const results = events.filter(event => 
      JSON.stringify(Object.values(event)).toLowerCase().includes(searchTerm.toLowerCase())
      );
    setFiltered(results);
  }

  const myEvents = (events: MeetupEvent[]) => events.map((event) => {
    let eventTime: any = event.local_time?.split(":");
    let eventDate: any = event.local_date?.split("-");
    let newDateStart = new Date(
      parseInt(eventDate[0]), parseInt(eventDate[1]) - 1, parseInt(eventDate[2]), parseInt(eventTime[0]), parseInt(eventTime[1]));
    let newDateEnd = new Date( new Date(newDateStart).setHours(newDateStart.getHours() + 2));
    return {
      allDay: false,
      end: newDateEnd,
      start: newDateStart,
      title: event.name,
    };
  });

  // --------- HANDLERS ----------- ///
  const handleChange = event => {
    if (event?.target?.value === '' && event?.target?.value?.length < searchTerm.length) setFiltered(events);
    setSearchTerm(event.target.value);
  }

  const handleClick = event => {
    filter();
  }
  return (
    <Layout>
      <Head>
        <link href="../node_modules/react-big-calendar/lib/css/react-big-calendar.css" rel="stylesheet"></link>
      </Head>
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
              onInput={handleChange} 
            />
              <button type="submit" onClick={handleClick}><FontAwesomeIcon icon={faSearch}/></button>
          </label>
          <div className={css.eventList}>
            {filtered.map((event, index) => {
              return (
                <EventListItem key={index} event={event} index={index}></EventListItem>
              );
            })}
          </div>
        </Col>
        <Col className={css.rightSide}>
          <div style={{ minHeight: 500 }}>
            <Calendar
              events={myEvents(filtered)}
              views={allViews}
              step={60}
              showMultiDayTimes
              defaultDate={new Date()}
              components={{
                timeSlotWrapper: ColoredDateCellWrapper,
              }}
              startAccessor="start"
              endAccessor="end"
              localizer={localizer}
              style={{ height: 500 }}
            />
          </div>
        </Col>
      </Row>
    </Layout>
  );
};

export default MyCalendar;
