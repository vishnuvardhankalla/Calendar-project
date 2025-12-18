import {isSameMonth,isToday,format} from "../utils/dateUtils";

const DayCell = ({day,currentMonth,events}) => {
  const formattedDate = format(day,"yyyy-MM-dd");
  const dayEvents = events.filter(item=>item.date===formattedDate);
  const cellClass = `
    day-cell
    ${!isSameMonth(day,currentMonth) ? "disabled" : ""}
    ${isToday(day) ? "today" : ""}
  `;
  return (
    <div className={cellClass}>
      <span className="date-number">{format(day,"d")}</span>
      <div className="events">
        {dayEvents.map(item=>(
          <div
            key={item.id}
            className={`event ${dayEvents.length>1 ? "conflict" : ""}`}>
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DayCell;
