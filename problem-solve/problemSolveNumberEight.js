/*

//* PROBLEM

HackerLand University has the following grading policy:
- Every student receives a grade in the inclusive range from 0 to 100.
- Any grade less than 40 is a failing grade.

Sam is a professor at the university and likes to round each student's grade according to these rules:
- If the difference between the grade and the next multiple of 5 is less than 3, round grade up to the next multiple of 3.
- If the value of grade is less than 38, no rounding occurs as the result will still be a failing grade.

//* Function Description

Complete the function gradingStudents in the editor below.

gradingStudents has the following parameter(s):

int grades[n]: the grades before rounding

//* Returns

int[n]: the grades after rounding as appropriate

*/

// TODO: REFACTOR THIS PROBLEM SOLVING
//* SOLVING PROBLEM

//* sample input.
const grades = [73, 67, 38, 33];

/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */
function gradingStudents(grades) {
  // initial variable.
  const finalGrade = [];

  for (let i = 0; i < grades.length; i++) {
    //* if grade less than 35, do not round.
    if (grades[i] < 35) {
      finalGrade.push(grades[i]);
      continue;
    }

    //* requirements return true or false.
    let isTwoDigits = grades[i] >= 10;
    let lastNumber = grades[i].toString();

    //* if grade have two digits, get last string.
    if (isTwoDigits) {
      lastNumber = lastNumber[1];
    }

    //* logic business.
    switch (lastNumber) {
      case "0":
        finalGrade.push(calculateGrades(grades[i], 5));
        break;
      case "1":
        finalGrade.push(calculateGrades(grades[i], 4));
        break;
      case "2":
        finalGrade.push(calculateGrades(grades[i], 3));
        break;
      case "3":
        finalGrade.push(calculateGrades(grades[i], 2));
        break;
      case "4":
        finalGrade.push(calculateGrades(grades[i], 1));
        break;
      case "5":
        finalGrade.push(calculateGrades(grades[i], 5));
        break;
      case "6":
        finalGrade.push(calculateGrades(grades[i], 4));
        break;
      case "7":
        finalGrade.push(calculateGrades(grades[i], 3));
        break;
      case "8":
        finalGrade.push(calculateGrades(grades[i], 2));
        break;
      case "9":
        finalGrade.push(calculateGrades(grades[i], 1));
        break;
    }
  }

  //* return list final grade.
  return finalGrade;
}

//* Calculate grade to the next multiple 5,
//* and return grade is round or not.
function calculateGrades(grade, multiple) {
  //* calculate grade to next multiple 5.
  const nextMultiple5 = grade + multiple;

  //* get the difference between the grade and the next multiple 5.
  const rounded = Math.abs(nextMultiple5 - grade);

  //* if less than 3, return round grade up to the next multiple 5.
  if (rounded < 3) {
    return nextMultiple5;
  }

  //* return default grade.
  return grade;
}

//* expected result: [75, 67, 40, 33]
console.log(gradingStudents(grades));
