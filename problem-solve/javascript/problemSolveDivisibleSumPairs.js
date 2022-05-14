/*

//* PROBLEM

You are given an array of n integers, ar = [ar[0], ar[1], ..., ar[n-1]], and a positive integer, k.
Find and print the number of (i, j) pairs where i < j and ar[i] + ar[j] is divisible by k.

//* Function Description

Complete the divisibleSumPairs function in the editor below.
It should return the integer count of pairs meeting the criteria.

divisibleSumPairs has the following parameter(s):

n: the integer length of array ar
ar: an array of integers
k: the integer to divide the pair sum by

//* Input Format

The first line contains 2 space-separated integers, n and k.
The second line contains n space-separated integers
describing the values of ar[ar[0], ar[1], ..., ar[n-1]].

//* Output Format

Print the number of (i, j) pairs where i < j and ar[i] + ar[j] is evenly divisible by k.

*/

//* SOLVING PROBLEM

//* sample input.
const n = 6;
const k = 3;
const ar = [1, 3, 2, 6, 1, 2];

//* Complete the divisibleSumPairs function below.
function divisibleSumPairs(n, k, ar) {
  //* initial variable.
  let numbersOfPairs = 0,
    sumOfPairs = 0;

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      //* if index i and j same, continue.
      if (i === j) {
        continue;
      }

      //* calculate between ar[now] and ar[next].
      sumOfPairs = ar[i] + ar[j];

      //* is the result from calculate two value arrays
      //* more than or equals k and divided k evenly into zero.
      const isSumMoreThanOrEquals = sumOfPairs >= k;
      const isDividedToZero = sumOfPairs % k === 0;

      //* if it's passed the above two requirements
      //* increment the numbers of pairs.
      if (isSumMoreThanOrEquals && isDividedToZero) {
        numbersOfPairs++;
      }
    }
  }

  //* return the numbers of pairs from arrays.
  return numbersOfPairs;
}

//* expected result: 5
console.log(divisibleSumPairs(n, k, ar));
