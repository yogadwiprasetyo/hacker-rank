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

//* SOLVING PROBLEM

//* sample input.
const grades = [73, 67, 38, 33];
// const grades = [70, 61, 83, 74];

/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */
function gradingStudents(grades) {
  //* initial variable.
  const finalGrade = [];

  for (let i = 0; i < grades.length; i++) {
    //* if grade less than 35, do not round.
    if (grades[i] < 35) {
      finalGrade.push(grades[i]);
      continue;
    }

    //* check is grade have two digits and initial last number grade.
    const isTwoDigits = grades[i] >= 10;
    let lastNumberGrade = grades[i];

    //* if grade have two digits, get last number.
    if (isTwoDigits) {
      let gradeString = grades[i].toString();
      lastNumberGrade = parseInt(gradeString[1]);
    }

    //* check is last number grade is less than or equals four.
    //* check is last number grade is more than four.
    const isLessOrEqualsFour = lastNumberGrade <= 4;
    const isMoreThanFour = lastNumberGrade > 4;
    let multipleToFive = 0;

    //* if last number grade less than or equals four,
    //* else if last number grade more than four.
    //* get a value to make the grade point to a multiple of five.
    if (isLessOrEqualsFour) {
      multipleToFive = 5 - lastNumberGrade;
    } else if (isMoreThanFour) {
      multipleToFive = 10 - lastNumberGrade;
    }

    //* push the result grades to array final grades.
    finalGrade.push(calculateGrades(grades[i], multipleToFive));
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

  //* if the difference less than 3, return round grade up to the next multiple 5.
  if (rounded < 3) {
    return nextMultiple5;
  }

  //* return default grade.
  return grade;
}

//* expected result: [75, 67, 40, 33]
console.log(gradingStudents(grades));
