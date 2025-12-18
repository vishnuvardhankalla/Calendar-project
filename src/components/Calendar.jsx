import {useState} from "react";
import {addMonths,subMonths,parseISO} from "date-fns";
import CalendarHeader from "./CalendarHeader";
import CalendarGrid from "./CalendarGrid";
import AddEventForm from "./AddEventForm";

const Calendar = () => {
  const [currentMonth,setCurrentMonth] = useState(new Date());
  const [events,setEvents] = useState([]);
  const handleAddEvent = data => {
    setEvents(list=>list.concat(data));
    setCurrentMonth(parseISO(data.date));
  };
  const goPrev = () => {
    setCurrentMonth(month=>subMonths(month,1));
  };
  const goNext = () => {
    setCurrentMonth(month=>addMonths(month,1));
  };

  return (
    <div className="calendar-container">
      <CalendarHeader
        currentMonth={currentMonth}
        onPrev={goPrev}
        onNext={goNext}/>
      <AddEventForm onAddEvent={handleAddEvent} />
      <CalendarGrid currentMonth={currentMonth} events={events} />
    </div>
  );
};

export default Calendar;
