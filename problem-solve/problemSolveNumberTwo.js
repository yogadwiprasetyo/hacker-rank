/*

//* PROBLEM NUMBER TWO :

In this challenge, you are required to calculate and print the sum of the elements in an array, keeping in mind that some of those integers may be quite large.

//* Function Description

Complete the aVeryBigSum function in the editor below. It must return the sum of all array elements.

aVeryBigSum has the following parameter(s):

int ar[n]: an array of integers .
Return

long: the sum of all array elements
Input Format

The first line of the input consists of an integer .

The next line contains space-separated integers contained in the array.

//* Output Format

Return the integer sum of the elements in the array.

*/


//* SOLVING PROBLEM NUMBER TWO
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
