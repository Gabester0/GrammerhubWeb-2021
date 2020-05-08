import Layout from '../components/MyLayout'
import MyCalendar from '../components/MyCalendar'
import '../node_modules/react-big-calendar/lib/css/react-big-calendar.css'
import axios from 'axios';
import { useState, useEffect } from 'react';

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

const url: string = "https://api.meetup.com/grammerhub/events";



export default () => {
    // const [events, setEvents] = useState();

    // const getEvents = () => axios.get(url);

    const [hasError, setErrors] = useState(false);
    const [events, setEvents] = useState([]);

    async function fetchData() {
        axios.get(url, {headers: {"Access-Control-Allow-Origin": "*"}})
        .then(res => {
          const events = res.data;
          setEvents(events);
        })
    }

    useEffect(() => {
        fetchData();
    }, [])


    return (
        <Layout> 
            <div style={layoutStyle}>
                <div style={layoutStyle.leftSide}>
                    this is the left side {events}
                </div>
                <div style={layoutStyle.rightSide}>
                    <MyCalendar/>
                </div>
            </div>
        </Layout>   
    )
}

