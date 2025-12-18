import {format} from "date-fns";

const CalendarHeader = ({currentMonth,onPrev,onNext}) => {
  const monthLabel = format(currentMonth,"MMMM yyyy");
  return (
    <div className="calendar-header">
      <button onClick={onPrev}>←</button>
      <h2>{monthLabel}</h2>
      <button onClick={onNext}>→</button>
    </div>
  );
};

export default CalendarHeader;
