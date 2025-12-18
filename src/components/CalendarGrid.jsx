import DayCell from "./DayCell";
import {getCalendarDays} from "../utils/dateUtils";

const CalendarGrid = ({currentMonth,events}) => {
  const calendarDays = getCalendarDays(currentMonth);
  const weekLabels = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

  return (
    <div className="calendar-grid">
      {weekLabels.map(label=>(
        <div key={label} className="weekday">
          {label}
        </div>
      ))}

      {calendarDays.map(date=>(
        <DayCell
          key={date.getTime()}
          day={date}
          currentMonth={currentMonth}
          events={events}
        />
      ))}
    </div>
  );
};

export default CalendarGrid;
