import React from 'react'
import Layout from '../components/MyLayout'
import axios from 'axios'
import MyCalendar from '../components/MyCalendar'
import '../node_modules/react-big-calendar/lib/css/react-big-calendar.css'

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

    // const [hasError, setErrors] = useState(false);
    const [events, setEvents] = React.useState([]);

    async function fetchData() {
        // axios.get(url, {headers: {"Access-Control-Allow-Origin": "*"}})
        // .then(res => {
        //   const eventos = res.data;
        //   setEvents(eventos);
        // })
        axios.get('/grammerhub').then(res => {
            console.log(res.data)
            setEvents(res.data)
        })
    }

    React.useEffect(() => {
        fetchData();
    }, [])

    return (
        <Layout> 
            <div style={layoutStyle}>
                <div style={layoutStyle.leftSide}>
                    this is the left side {JSON.stringify(events)}
                </div>
                <div style={layoutStyle.rightSide}>
                    <MyCalendar/>
                </div>
            </div>
        </Layout>   
    )
}


// const Calendar = () => {

//     return (
//         <Layout> 
//             <div style={layoutStyle}>
//                 <div style={layoutStyle.leftSide}>
//                     this is the left side
//                 </div>
//                 <div style={layoutStyle.rightSide}>
//                     <MyCalendar/>
//                 </div>
//             </div>
//         </Layout>
//     )
// }

// export default Calendar
