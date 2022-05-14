/*

//* PROBLEM

  Given a chocolate bar, two children, Lily and Ron, are determining how to share it. 
  Each of the squares has an integer on it.

  Lily decides to share a contiguous segment of the bar selected such that:

  The length of the segment matches Ron's birth month, and,
  The sum of the integers on the squares is equal to his birth day.
  You must determine how many ways she can divide the chocolate.

//* Function Description

Complete the birthday function in the editor below. It should return an integer denoting the number of ways Lily can divide the chocolate bar.

birthday has the following parameter(s):

- s: an array of integers, the numbers on each of the squares of chocolate
- d: an integer, Ron's birth day
- m: an integer, Ron's birth month

//* Input Format

The first line contains an integer n, the number of squares in the chocolate bar.
The second line contains n space-separated integers s[i],
the numbers on the chocolate squares where 0 <= i < n.
The third line contains two space-separated integers, d and m, Ron's birth day and his birth month.

//* Output Format

Print an integer denoting the total number of ways that
Lily can portion her chocolate bar to share with Ron.

*/

//* SOLVING PROBLEM

//* sample input.
const s = [1, 2, 1, 3, 2];
const d = 3;
const m = 2;

// Complete the birthday function below.
function birthday(s, d, m) {
  //* initial and declaration variable.
  let sumOfChocolate = 0;
  let lengthMonth = m;

  //* is a chocolate bar length less than one,
  //* and then the value chocolate bar is same with d.
  const isLessThanOne = s.length === 1;
  const isChocoBarSame = s[0] === d;

  //* if the above two requirements true, return 1.
  if (isLessThanOne && isChocoBarSame) {
    return 1;
  }

  for (let i = 0; i < s.length; i++) {
    //* divide bar chocolate using length m.
    let divideBarChoco = s.slice(i, lengthMonth);
    let sumOfBarChoco = 0;

    //* increment of month length to calculate chocolate bar.
    lengthMonth++;

    //* if the dividing bar chocolate length not the same with m,
    //* break the loop.
    const isLengthNotSame = divideBarChoco.length !== m;
    if (isLengthNotSame) {
      break;
    }

    //* calculate the value in dividing bar chocolate,
    //* to make sure the result is the same with d or not.
    for (let j = 0; j < divideBarChoco.length; j++) {
      sumOfBarChoco += divideBarChoco[j];
    }

    //* if the result calculated from dividing bar chocolate
    //* is the same with d, increment sum of chocolate.
    if (sumOfBarChoco === d) {
      sumOfChocolate++;
    }
  }

  //* returns the sum of chocolate bars obtained.
  return sumOfChocolate;
}

//* expected result: 2
console.log(birthday(s, d, m));
