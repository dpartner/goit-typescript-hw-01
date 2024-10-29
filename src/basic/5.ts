enum DayOfWeek {
  Monday = "MONDAY",
  Tuesday = "TUESDAY",
  Wednesday = "WEDNESDAY",
  Thursday = "THURSDAY",
  Friday = "FRIDAY",
  Saturday = "SATURDAY",
  Sunday = "SUNDAY",
}

const isWeekend = (day: DayOfWeek): boolean => {
  if (day === "SATURDAY" || day === "SUNDAY") {
    return true;
  } else {
    return false;
  }
};

isWeekend(DayOfWeek.Monday);
