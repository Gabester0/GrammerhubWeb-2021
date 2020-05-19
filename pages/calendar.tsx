import React from 'react'
import Layout from '../components/MyLayout'
import axios from 'axios'
import MyCalendar from '../components/MyCalendar'
import '../node_modules/react-big-calendar/lib/css/react-big-calendar.css'
import { MeetupEvent } from '../service/eventModel'

const layoutStyle = {
    display: 'grid',
    gridGap: '10px',
    marginTop: '50px',
    leftSide: {
        gridColumn: '1 / span 1'
    },
    rightSide: {
        gridColumn: '2 / span 1'
    }
}

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
            <div style={layoutStyle}>
                <div style={layoutStyle.leftSide}>
                    this is the left side
                    {events.map( event => {
                        return (
                        <div className="">
                            <span>{event.local_date} || {event.name}</span>
                        </div>
                        )
                    })}
                </div>
                <div style={layoutStyle.rightSide}>
                    <MyCalendar events={events}/>
                </div>
            </div>
        </Layout>   
    )
}
