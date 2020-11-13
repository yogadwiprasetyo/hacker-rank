/*

//* PROBLEM

You are choreographing a circus show with various animals. For one act, 
you are given two kangaroos on a number line ready to jump in the positive direction (i.e, toward positive infinity).

- The first kangaroo starts at location x1 and moves at a rate of v1 meters per jump.
- The second kangaroo starts at location x2 and moves at a rate of v2 meters per jump.

You have to figure out a way to get both kangaroos at the same location at the same time as part of the show. If it is possible, return YES, otherwise return NO.

//* Function Description

Complete the function kangaroo in the editor below. 
It should return YES if they reach the same position at the same time, or NO if they don't.

kangaroo has the following parameter(s):

- x1, v1: integers, starting position and jump distance for kangaroo 1
- x2, v2: integers, starting position and jump distance for kangaroo 2

//* Input Format

A single line of four space-separated integers denoting the respective values of x1, v1, x2, and v2.

//* Output Format

Print YES if they can land on the same location at the same time; otherwise, print NO.

Note: The two kangaroos must land at the same location after making the same number of jumps.

*/

// TODO : REFACTOR CODE THIS PROBLEM SOLVE
//* SOLVING PROBLEM

//* sample input.
const x1 = 0;
const v1 = 3;
const x2 = 4;
const v2 = 2;

//* Complete the kangaroo function below.
function kangaroo(x1, v1, x2, v2) {
  //* checks if Kangaroo 2 is too far.
  if (x2 > x1 && v2 > v1) {
    return "NO";
  }

  //* start point kangaroo 1 and 2.
  let startK1 = x1;
  let startK2 = x2;

  // TODO: REFACTOR
  //* checking is start point kangaroo is same or not.
  for (let i = 0; i < 10000; i++) {
    //* calculate start point with distance jump.
    startK1 += v1;
    startK2 += v2;

    //* is start point same return YES.
    if (startK1 === startK2) {
      return "YES";
    }
  }

  //* is start point not same return NO.
  return "NO";
}

//* expected result: YES
console.log(kangaroo(x1, v1, x2, v2));
