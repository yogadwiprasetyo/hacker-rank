/*

//* PROBLEM

Two friends Anna and Brian, are deciding how to split the bill at a dinner. Each will only pay for the items they consume. Brian gets the check and calculates Anna's portion. You must determine if his calculation is correct.

Function Description

Complete the bonAppetit function in the editor below. It should print Bon Appetit if the bill is fairly split. Otherwise, it should print the integer amount of money that Brian owes Anna.

bonAppetit has the following parameter(s):

bill: an array of integers representing the cost of each item ordered
k: an integer representing the zero-based index of the item Anna doesn't eat
b: the amount of money that Anna contributed to the bill

Input Format

The first line contains two space-separated integers n and k, the number of items ordered and the 0-based index of the item that Anna did not eat.
The second line contains n space-separated integers bill[i] where 0 <= i < n.
The third line contains an integer, b, the amount of money that Brian charged Anna for her share of the bill.

Output Format

If Brian did not overcharge Anna, print Bon Appetit on a new line; otherwise, print the difference (i.e., b-charged - b-actual) that Brian must refund to Anna. This will always be an integer.

*/

//* SOLVING PROBLEM
//* sample input.
const bill = [3, 10, 2, 9];
const k = 1;
const b = 12;

// Complete the bonAppetit function below.
function bonAppetit(bill, k, b) {
  // remove items anna's not eat.
  bill.splice(k, 1);

  // calculate bill to anna's amount of money.
  const calculateBill = (total, bill) => (total += bill);
  const totalBill = bill.reduce(calculateBill, 0);
  const bActual = totalBill / 2;

  // if bill more than in fact, return the change.
  if (bActual !== b) {
    console.log(b - bActual);
    return;
  }

  // if bill same, return string message.
  console.log("Bon Appetit");
}

//* expected result: 5
console.log(bonAppetit(bill, k, b));
