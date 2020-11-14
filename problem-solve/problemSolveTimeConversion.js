/*

//* PROBLEM

Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
      - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

//* Function Description

Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

timeConversion has the following parameter(s):

string s: a time in 12 hour format

//* Returns

string: the time in 24 hour format

*/

//* SOLVING PROBLEM

//* sample input.
const s = "07:05:45PM";

/*
 * Complete the timeConversion function below.
 */
function timeConversion(strtime) {
  //* initial variable.
  let convertHour = "";

  //* slices the hours and status from the time string.
  const hour = strtime.slice(0, 2);
  const status = strtime.slice(8, 10);

  //* morning and evening conversion requirements.
  const isNight = status === "PM";
  const isMorning = status === "AM";
  const isTwelve = parseInt(hour) === 12;

  //* logical business.
  if (isNight && !isTwelve) {
    convertHour = hoursConversion(hour);
  } else if (isMorning && isTwelve) {
    convertHour = hoursConversion(hour);
  } else {
    const timeWithoutState = strtime.slice(0, 8);
    return timeWithoutState;
  }

  //* the result time conversion 12 to 24 hours.
  let time24hours = strtime.replace(hour, convertHour);
  time24hours = time24hours.slice(0, 8);

  //* return the result.
  return time24hours;
}

//* conversion hours to 13-00.
function hoursConversion(hour) {
  const timenight = [
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "00",
  ];

  //* if hours not two digits, get last string.
  const isNotTwoDigits = parseInt(hour) < 10;
  if (isNotTwoDigits) {
    hour = hour[1];
  }

  //* conversion 12-hours to 24-hours.
  for (let i = 0; i < 12; i++) {
    let isIndexMatch = i === parseInt(hour) - 1;
    if (isIndexMatch) {
      return timenight[i];
    }
  }
}

//* expected result: 19:05:45
console.log(timeConversion(s));
