import React from "react";
import { Calendar, Views, momentLocalizer } from "react-big-calendar";
import moment from "moment";

const localizer = momentLocalizer(moment);
const allViews = Object.keys(Views).map((k) => Views[k]);

const ColoredDateCellWrapper = ({ children }) =>
  React.cloneElement(React.Children.only(children), {
    style: {
      backgroundColor: "rgb(169, 106, 241)",
    },
  });

const MyCalendar = (props) => {
  const events = props.events.map((event) => {
    let eventTime: number[] = event.local_time.split(":");
    let eventDate: number[] = event.local_date.split("-");
    let newDateStart = new Date(
      eventDate[0],
      eventDate[1] - 1,
      eventDate[2],
      eventTime[0],
      eventTime[1]
    );
    let newDateEnd = new Date(
      new Date(newDateStart).setHours(newDateStart.getHours() + 2)
    );
    return {
      allDay: false,
      end: newDateEnd,
      start: newDateStart,
      title: event.name,
    };
  });
  return (
    <div style={{ minHeight: 500 }}>
      <Calendar
        events={events}
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
  );
};

export default MyCalendar;

//http://jquense.github.io/react-big-calendar/examples/index.html
