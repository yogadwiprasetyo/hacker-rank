/*

//* PROBLEM

A video player plays a game in which the character competes in a hurdle race.
Hurdles are of varying heights, and the characters have a maximum height they can jump.
There is a magic potion they can take that will increase their maximum jump height by 1 unit for each dose.
How many doses of the potion must the character take to be able to jump all of the hurdles.
If the character can already clear all of the hurdles, return 0.

//* Function Description

Complete the hurdleRace function in the editor below.

hurdleRace has the following parameter(s):

- int k: the height the character can jump naturally
- int height[n]: the heights of each hurdle


//* Input Format

The first line contains two space-separated integers n and k, 
the number of hurdles and the maximum height the character can jump naturally.
The second line contains n space-separated integers height[i] where 0 <= i < n.

//* Output Format

int: the minimum number of doses required, always 0 or more

*/

//* SOLVING PROBLEM

//* sample input.
const k = 4;
const heights = [1, 6, 3, 5, 2];

// Fungsi untuk mencari nilai tertinggi di dalam array.
function getMax(arr) {
  // initial nilai awal max.
  let max = arr[0];

  // loop all value array.
  // if value arr current more than value max,
  // then change value max to arr current.
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }

  // mengembalikkan max value.
  return max;
}

// Complete the hurdleRace function below.
function hurdleRace(k, height) {
  // integer value.
  const maxValue = getMax(height);

  // if jump more than max value in height,
  // then return 0 as default value.
  if (k > maxValue) {
    return 0;
  }

  // else, get different max value with k.
  const doses = maxValue - k;

  // return the result.
  return doses;
}

//* expected result: 2
console.log(hurdleRace(k, heights));
