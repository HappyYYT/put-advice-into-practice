export function getWeek(date) {
  const weekArr = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  return weekArr[date.getDay() - 1];
}

export function dateFormatter(date, format) {
  const formatMap = {
    YYYY: (date) => date.getFullYear(),
    MM: (date) => date.getMonth() + 1,
    DD: (date) => date.getDate(),
  };
  Object.keys(formatMap).forEach((formatKey) => {
    format = format.replaceAll(formatKey, formatMap[formatKey](date));
  });
  return format;
}
