/*

//* PROBLEM

An avid hiker keeps meticulous records of their hikes. During the last hike that took exactly steps steps,
for every step it was noted if it was an uphill, U, or a downhill, D step. Hikes always start and end at sea level,
and each step up or down represents a 1 unit change in altitude. We define the following terms:

- A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and
ending with a step down to sea level.

- A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and
ending with a step up to sea level.

Given the sequence of up and down steps during a hike, find and print the number of valleys walked through.

//* Function Description

Complete the countingValleys function in the editor below.

countingValleys has the following parameter(s):

- int steps: the number of steps on the hike
- string path: a string describing the path

//* Input Format

The first line contains an integer steps, the number of steps in the hike.
The second line contains a single string path, of steps characters that describe the path.

//* Output Format

int: the number of valleys traversed

*/

//* SOLVING PROBLEM

//* sample input.
const steps = 8;
const path = "UDDDUDUU";

/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */
function countingValleys(steps, path) {
  // inisialisasi variable yang dibutuhkan.
  let seaLevel = 0;
  let totalValleys = 0;
  const stepUp = "U";
  const stepDown = "D";

  // loop all path.
  for (let i = 0; i < steps; i++) {
    // jika step berubah keatas level sea ditambah satu,
    // jika step berubah kebawah level sea dikurangi satu.
    if (path[i] === stepUp) ++seaLevel;
    if (path[i] === stepDown) --seaLevel;

    // kondisi yang menentukan valley.
    let isUp = path[i] === stepUp;
    let isSea = seaLevel === 0;

    // jika benar valley, maka tambah satu total valleys.
    if (isUp && isSea) {
      totalValleys++;
    }
  }

  // mengembalikan hasil.
  return totalValleys;
}

//* expected result: 1
console.log(countingValleys(steps, path));
