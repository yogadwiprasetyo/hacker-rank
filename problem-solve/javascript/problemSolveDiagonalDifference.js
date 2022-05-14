/*

//* PROBLEM

Given a square matrix, calculate the absolute difference between the sums of its diagonals.

//* Function description

Complete the function in the editor below.

diagonalDifference takes the following parameter:

int arr[n][m]: an array of integers

//* Return

int: the absolute diagonal difference

*/

//* SOLVING PROBLEM
//* sample input.
const arr = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];

/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */
function diagonalDifference(arr) {
  //* initial variable.
  let sumOfDiagonalRight = 0;
  let sumOfDiagonalLeft = 0;
  let reverse = arr.length;
  const arrLength = arr.length;

  //* logical business.
  for (let i = 0; i < arrLength; i++) {
    let diagonalRight = arr[i][i];
    let diagonalLeft = arr[(--reverse)][i];

    sumOfDiagonalRight += diagonalRight;
    sumOfDiagonalLeft += diagonalLeft;
  }

  //* return difference diagonal left and right.
  return Math.abs(sumOfDiagonalLeft - sumOfDiagonalRight);
}

//* expected result: 15
console.log(diagonalDifference(arr));
