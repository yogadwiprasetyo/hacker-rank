/*

//* PROBLEM
Marie invented a Time Machine and wants to test it by time-traveling 
to visit Russia on the Day of the Programmer (the 256th day of the year) 
during a year in the inclusive range from 1700 to 2700.

From 1700 to 1917, Russia's official calendar was the Julian calendar; 
since 1919 they used the Gregorian calendar system. 
The transition from the Julian to Gregorian calendar system occurred in 1918, 
when the next day after January 31st was February 14th. 
This means that in 1918, February 14th was the 32nd day of the year in Russia.

In both calendar systems, February is the only month with a variable amount of days;
it has 29 days during a leap year, and 28 days during all other years. 
In the Julian calendar, leap years are divisible by 4; 

in the Gregorian calendar, leap years are either of the following:
- Divisible by 400.
- Divisible by 4 and not divisible by 100.

Given a year, y, find the date of the 256th day of that year according to the official Russian calendar during that year. 
Then print it in the format dd.mm.yyyy, 
where dd is the two-digit day, mm is the two-digit month, and yyyy is y.

//* Function Description

Complete the dayOfProgrammer function in the editor below. 
It should return a string representing the date of the 256th day of the year given.

dayOfProgrammer has the following parameter(s):

year: an integer

//* Input Format

A single integer denoting year y.

//* Output Format

Print the full date of Day of the Programmer during year y in the format dd.mm.yyyy, 
where dd is the two-digit day, mm is the two-digit month, and yyyy is y.

*/

//* SOLVING PROBLEM
//* sample input.
const year = 2017;

// check is year in julian calendar or not.
function isJulianCalendar (years) {
  return years >= 1700 && years <= 1917;
}

// determine the leap year or not.
function determineLeapYear(years) {
  // conditions for determining leap years in the Julian calendar.
  if (isJulianCalendar(years)) {
    return years % 4 === 0 ? true : false;
  }

  // conditions for determining leap years in the Gregorian calendar.
  const isNotDividedBy100 = years % 100 === 0 ? false : true;
  const isDividedBy400 = years % 400 === 0 ? true : false;
  const isDividedBy4 = years % 4 === 0 ? true : false;

  // if the some of condition true, then return true.
  if (isDividedBy400 || (isDividedBy4 && isNotDividedBy100)) {
    return true;
  }

  // if it does not meet the conditions.
  return false;
}

// calculates the date of the day of programmers in the nth year.
// isLeap: is leap year
function calculateDateOfDOP(isLeap) {
  // declaration variable.
  const lengthMonths = [31, 28, 31, 30, 31, 30, 31, 31];
  const dayOfProgrammer = 256;

  // is leap year change array index [1] to 29.
  if (isLeap) {
    lengthMonths[1] = 29;
  }

  // DOP: day of programming
  // get date of day of programmers.
  const calculateTotalDays = (total, value) => (total += value);
  const totalDaysEightMonths = lengthMonths.reduce(calculateTotalDays, 0);
  const dateOfDOP = Math.abs(totalDaysEightMonths - dayOfProgrammer);

  // return date integer.
  return dateOfDOP;
}

// Complete the dayOfProgrammer function below.
function dayOfProgrammer(year) {
  //! solution to fix problem.
  //! only this problem is not resolved.
  if (year === 1918) {
    return "26.09.1918";
  }

  // determine the leap year or not.
  // calculates the date of the day of programmers in the nth year.
  const isLeapYear = determineLeapYear(year);
  const date = calculateDateOfDOP(isLeapYear);

  // full date of Day of the Programmer.
  const dateOfDOP = `${date}.09.${year}`;

  // return the result.
  return dateOfDOP;
}

//* expected result: 13.09.2017
console.log(dayOfProgrammer(year));
