/*

//* PROBLEM NUMBER SIX :

You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.

//* Function Description

Complete the function birthdayCakeCandles in the editor below.

birthdayCakeCandles has the following parameter(s):

int candles[n]: the candle heights

//* Returns

int: the number of candles that are tallest

*/



//* SOLVING PROBLEM NUMBER SIX
//* sample input.
  const candles = [4, 4, 1, 3];

/*
 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */
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
