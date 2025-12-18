import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  isSameMonth,
  isToday,
  format
} from "date-fns";
export const getCalendarDays = currentMonth => {
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const rangeStart = startOfWeek(monthStart);
  const rangeEnd = endOfWeek(monthEnd);
  
  return eachDayOfInterval({
    start:rangeStart,
    end:rangeEnd
  });
};

export {isSameMonth,isToday,format};
