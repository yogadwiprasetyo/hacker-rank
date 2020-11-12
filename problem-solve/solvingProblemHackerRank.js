// * PROBLEM SOLVE NUMBER ONE
/* 
//* Sample input.
const a = [17, 28, 30, 40];
const b = [99, 16, 8, 40];

function compareTriplets(a, b) {
  //* Initial both total point
  let totalPointA = 0;
  let totalPointB = 0;

  //* logical business.
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      totalPointA += 1;
    } else if (a[i] < b[i]) {
      totalPointB += 1;
    } else {
      console.log("neither person receives a point.");
    }
  }

  //* return total point from a and b
  return [totalPointA, totalPointB];
}

//* Expected result: 2 1
console.log(compareTriplets(a, b));
*/

//* PROBLEM SOLVE NUMBER TWO
/*
//* sample input.
const arr = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];

//* Complete the aVeryBigSum function below.
function aVeryBigSum(ar) {
  //* initial variabel total sum.
  let sum = 0;

  //* logical business.
  ar.forEach((value) => (sum += value));

  //* return total sum from array.
  return sum;
}

//* expected result: 5000000015
console.log(aVeryBigSum(arr));
*/

//* PROBLEM SOLVE NUMBER THREE
/* 
//* sample input.
const arr = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];
*/

/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */
/* 
function diagonalDifference(arr) {
  //* initial variable.
  let totalLTR = 0;
  let totalRTL = 0;
  let reverse = arr.length;
  const arrLength = arr.length;

  //* logical business.
  for (let i = 0; i < arrLength; i++) {
    let rightDiagonal = arr[i][i];
    let leftDiagonal = arr[(reverse -= 1)][i];

    totalLTR += rightDiagonal;
    totalRTL += leftDiagonal;
  }

  //* return difference diagonal left and right.
  return Math.abs(totalRTL - totalLTR);
}

//* expected result: 15
console.log(diagonalDifference(arr));
*/

//* PROBLEM SOLVE NUMBER FOUR
/*
//* sample input.
const arr = [-4, 3, -9, 0, 4, 1];

//* Complete the plusMinus function below.
function plusMinus(arr) {
  //* initial variable.
  const arrLength = arr.length;
  let totalPositive = 0,
    totalNegative = 0,
    totalZero = 0;

  //* logical business.
  for (let n = 0; n < arrLength; n++) {
    //* determine the number is zero.
    let isZero = arr[n] === 0;
    //* determine the number is positive.
    let isPositive = arr[n] > 0;
    //* determine the number is negative.
    let isNegative = arr[n] < 0;

    //* increment total
    //* number positive,
    //* number negative,
    //* number zero.
    if (isZero) {
      totalZero++;
    } else if (isPositive) {
      totalPositive++;
    } else if (isNegative) {
      totalNegative++;
    }
  }

  //* calculate of proportion number zero, positive, and negative.
  const proportionZero = totalZero / arrLength;
  const proportionPositive = totalPositive / arrLength;
  const proportionNegative = totalNegative / arrLength;

  //* print all proportion number.
  console.log(proportionPositive.toPrecision(6));
  console.log(proportionNegative.toPrecision(6));
  console.log(proportionZero.toPrecision(6));
}

//* expected result: P:0.500000, N:0.333333, Z:0.166667;
plusMinus(arr);
*/

//* PROBLEM SOLVE NUMBER FIVE
/* 
//* sample input.
const arr = [1, 3, 5, 7, 9];

//* Complete the miniMaxSum function below.
function miniMaxSum(arr) {
  //* initial variable.
  const arrSum = [];
  const arrLength = arr.length;

  //* logical business.
  for (let i = 0; i < arrLength; i++) {
    let total = 0;

    for (let j = 0; j < arrLength; j++) {
      //* exception number index of array.
      if (i === j) {
        continue;
      }

      //* calculate value of array except number now.
      total += arr[j];
    }

    //* push the result from array.
    arrSum.push(total);
  }

  //*? DEBUGGING
  console.log("arr sum:", arrSum);

  //* initial variable max and min sum.
  let minSum = arrSum[0],
    maxSum = arrSum[0];

  //* find a min and max sum.
  for (let k = 0; k < arrSum.length; k++) {
    if (maxSum < arrSum[k]) {
      maxSum = arrSum[k];
    } else if (minSum > arrSum[k]) {
      minSum = arrSum[k];
    }
  }

  //* print minSummary and maxSummary.
  console.log(minSum, maxSum);
}

//* expected result: Min:16, Max:24
miniMaxSum(arr);
*/

//* PROBLEM SOLVE NUMBER SIX
//* sample input.
// const candles = [4, 4, 1, 3];

/*
 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */
/*
function birthdayCakeCandles(candles) {
  //* initial variable.
  let max = candles[0];

  //* find max value in array candles.
  for (let i = 0; i < candles.length; i++) {
    if (max < candles[i]) {
      max = candles[i];
    }
  }

  //* filter value max in array candles
  const tallest = (candle) => candle === max;
  const candleTallest = candles.filter(tallest);

  //* return the number of candles that are tallest
  return candleTallest.length;
}

//* expected result: 2
console.log(birthdayCakeCandles(candles));
 */

//* PROBLEM SOLVE NUMBER SEVEN

//* sample input.

//* expected result:
