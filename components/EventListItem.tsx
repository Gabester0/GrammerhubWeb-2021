import React from "react";
import "../node_modules/react-big-calendar/lib/css/react-big-calendar.css";
import css from "../components/MyCalendar.scss";

export default (props) => {
  const [isSelected, setIsSelected] = React.useState<boolean>(false);
  const myRef = React.createRef<HTMLDivElement>();

  const handleClickOutside = (e) => {
    console.log("clicking anywhere");
    if (myRef.current?.contains(e.target)) {
      // inside click
      setIsSelected(true);
      return;
    }
    // outside click
    setIsSelected(false);
  };

  React.useEffect(() => {}, []);

  React.useEffect(() => {
    if (isSelected) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSelected]);

  return (
    <div ref={myRef} className={css.listItem} onClick={(e) => setIsSelected(!isSelected)}>
      <span> {props.index + 1} - {props.event.local_date} || {props.event.name}</span>
      {isSelected ? <hr /> : null}
      <div dangerouslySetInnerHTML={isSelected ? { __html: props.event.description } : { __html: "" } }></div>
    </div>
  );
};
