import { useState } from "react";
import Calendar from "react-calendar";
import "./Calender.css";
// import "react-calendar/dist/Calendar.css";

export function Calender({ className }) {
  const [value, onChange] = useState(new Date());

  return <Calendar onChange={onChange} value={value} className={className} />;
}
