import React from 'react'
import Layout from '../components/MyLayout'
import axios from 'axios'
import MyCalendar from '../components/MyCalendar'
import '../node_modules/react-big-calendar/lib/css/react-big-calendar.css'
import { MeetupEvent } from '../service/eventModel'
import css from "./assets/css/calendar/calendar.scss";
import CustomScroll from 'react-custom-scroll';

export default () => {

    const [events, setEvents] = React.useState<MeetupEvent[]>([]);

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
            <div className={css.layoutStyle}>
                <div className={css.leftSide}>
                    <div className={css.eventHeader}>Events List</div>
                    <div style={{height: '500px', overflow:'scroll'}}>
                        <CustomScroll allowOuterScroll={true}>
                            {events.map( (event, index) => {
                                return (
                                <div className={css.listItem}>
                                    <span>{index + 1} - {event.local_date} || {event.name}</span>
                                </div>
                                )
                            })}
                        </CustomScroll>
                    </div>
                </div>
                <div className={css.rightSide}>
                    <MyCalendar events={events}/>
                </div>
            </div>
        </Layout>   
    )
}
