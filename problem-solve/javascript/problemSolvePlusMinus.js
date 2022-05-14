/*

//* PROBLEM

Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with 6 places after the decimal.

Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to 10^-4 are acceptable.

//* Function Description

Complete the plusMinus function in the editor below.

plusMinus has the following parameter(s):

int arr[n]: an array of integers
Print
Print the ratios of positive, negative and zero values in the array. Each value should be printed on a separate line with 6 digits after the decimal. The function should not return a value.

//* Input Format

The first line contains an integer, n, the size of the array.
The second line contains n space-separated integers that describe arr[n].

//* Output Format

Print the following 3 lines, each to 6 decimals:

1. proportion of positive values
2. proportion of negative values
3. proportion of zeros

*/

//* SOLVING PROBLEM
//* sample input.
const arr = [-4, 3, -9, 0, 4, 1];

//* Complete the plusMinus function below.
function plusMinus(arr) {
  //* initial variable.
  const arrLength = arr.length;
  let sumOfPositive = 0,
    sumOfNegative = 0,
    sumOfZero = 0;

  //* logical business.
  for (let n = 0; n < arrLength; n++) {
    //* determine the number is zero or positive or negative.
    let isZero = arr[n] === 0;
    let isPositive = arr[n] > 0;
    let isNegative = arr[n] < 0;

    //* increment total
    //* number positive,
    //* number negative,
    //* number zero.
    if (isZero) {
      sumOfZero++;
    } else if (isPositive) {
      sumOfPositive++;
    } else if (isNegative) {
      sumOfNegative++;
    }
  }

  //* calculate of proportion number zero, positive, and negative.
  const proportionZero = proportionNumber(sumOfZero, arrLength);
  const proportionPositive = proportionNumber(sumOfPositive, arrLength);
  const proportionNegative = proportionNumber(sumOfNegative, arrLength);

  //* print all proportion number.
  console.log(proportionPositive);
  console.log(proportionNegative);
  console.log(proportionZero);
}

//* calculate proportion number and change to precision 6.
function proportionNumber (sum, length) {
  const proportion = sum / length;
  return proportion.toPrecision(6);
}

//* expected result: P:0.500000, N:0.333333, Z:0.166667;
plusMinus(arr);
