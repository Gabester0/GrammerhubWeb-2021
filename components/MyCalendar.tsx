import React from 'react'
import { Calendar, Views, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
// import '../static/MyCalendar.css'
// import '../node_modules/react-big-calendar/lib/css/react-big-calendar.css'
// import 'react-big-calendar/lib/css/react-big-calendar.css'
// import style from 'react-big-calendar/lib/css/react-big-calendar.css'

const localizer = momentLocalizer(moment)
const allViews = Object.keys(Views).map(k => Views[k])

const ColoredDateCellWrapper = ({ children }) =>
  React.cloneElement(React.Children.only(children), {
    style: {
      backgroundColor: 'lightblue',
    },
  })

const dummyEvents = [
  {
    allDay: false,
    end: new Date('April 26, 2020 11:13:00'),
    start: new Date('April 24, 2020 11:13:00'),
    title: 'hi',
  },
  {
    allDay: true,
    end: new Date('December 09, 2017 11:13:00'),
    start: new Date('December 09, 2017 11:13:00'),
    title: 'All Day Event',
  },
]

const MyCalendar = props => (
  <div style={{ minHeight: 500 }}>
    <Calendar
      events={dummyEvents}
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
)


export default MyCalendar

//http://jquense.github.io/react-big-calendar/examples/index.html