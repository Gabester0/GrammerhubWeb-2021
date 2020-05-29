import React from 'react'
import Layout from '../components/MyLayout'
import axios from 'axios'
import MyCalendar from '../components/MyCalendar'
import '../node_modules/react-big-calendar/lib/css/react-big-calendar.css'
import { MeetupEvent } from '../service/eventModel'
import css from "./assets/css/calendar/calendar.scss";
import EventListItem from '../components/EventListItemK'
import { Col, Row } from 'react-bootstrap'

export default () => {

    const [events, setEvents] = React.useState<MeetupEvent[]>([]);
    const [selected, setSelected] = React.useState<number>();

    async function fetchData() {
        axios.get('/grammerhub').then(res => {
            setEvents(res.data.map(d => {
                let event = new MeetupEvent(d);
                return event;
                })
            );
        })
    }
    
    React.useEffect(() => {
        fetchData();
    }, [])


    return (
        <Layout> 
            <Row className={css.layoutStyle}>
                <Col className={css.leftSide}>
                    <div className={css.eventHeader}>Events List</div>
                    <div className={css.eventList}>
                        {/* <CustomScroll allowOuterScroll={true}> */}
                            {events.map( (event, index) => {
                                return (
                                    <EventListItem event={event} index={index}></EventListItem>
                                )
                            })}
                        {/* </CustomScroll> */}
                    </div>
                </Col>
                <Col className={css.rightSide}>
                    <MyCalendar events={events}/>
                </Col>
            </Row>
        </Layout>   
    )
}
