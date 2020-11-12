/*

**PROBLEM NUMBER ONE** :

Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from 1 to 100 for three categories: problem clarity, originality, and difficulty.

The rating for Alice's challenge is the triplet a = (a[0], a[1], a[2]), and the rating for Bob's challenge is the triplet b = (b[0], b[1], b[2]).

The task is to find their comparison points by comparing a[0] with b[0], a[1] with b[1], and a[2] with b[2].

If a[i] > b[i], then Alice is awarded 1 point.
If a[i] < b[i], then Bob is awarded 1 point.
If a[i] = b[i], then neither person receives a point.

Comparison points is the total points a person earned.

Given a and b, determine their respective comparison points.

*/

// * SOLVING PROBLEM NUMBER ONE
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

