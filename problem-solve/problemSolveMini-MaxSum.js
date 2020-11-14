/*

//* PROBLEM

Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

//* Function Description

Complete the miniMaxSum function in the editor below.

miniMaxSum has the following parameter(s):

arr: an array of 5 integers

//* Print

Print two space-separated integers on one line: the minimum sum and the maximum sum of 4 of 5 elements.

//* Input Format

A single line of five space-separated integers.

//* Output Format

Print two space-separated long integers denoting the respective minimum and maximum values that can be calculated by summing exactly four of the five integers. (The output can be greater than a 32 bit integer.)

*/

//* SOLVING PROBLEM
//* sample input.
const arr = [1, 3, 5, 7, 9];

//* Complete the miniMaxSum function below.
function miniMaxSum(arr) {
  //* initial variable.
  const arrSum = [];
  const arrLength = arr.length;

  //* logical business.
  for (let i = 0; i < arrLength; i++) {
    let sumAllValue = 0;

    for (let j = 0; j < arrLength; j++) {
      //* exception number index of array.
      if (i === j) {
        continue;
      }

      //* calculate value of array except number now.
      sumAllValue += arr[j];
    }

    //* push the result from array.
    arrSum.push(sumAllValue);
  }

  //* min and max value in array sum.
  const [minSum, maxSum] = minAndMaxArray(arrSum);

  //* print minSummary and maxSummary.
  console.log(minSum, maxSum);
}

//* find a min and max value in array.
function minAndMaxArray(arr) {
  //* initial variable max and min sum.
  let min = arr[0],
    max = arr[0];

  //* find a min and max sum.
  for (let k = 0; k < arr.length; k++) {
    if (max < arr[k]) {
      max = arr[k];
    } else if (min > arr[k]) {
      min = arr[k];
    }
  }

  return [min, max];
}

//* expected result: Min:16, Max:24
miniMaxSum(arr);
