/*

//* PROBLEM

A person wants to determine the most expensive computer keyboard and USB drive that can be purchased with a give budget.
Given price lists for keyboards and USB drives and a budget, find the cost to buy them. 
If it is not possible to buy both items, return -1.

//* Function Description

Complete the getMoneySpent function in the editor below.

getMoneySpent has the following parameter(s):

- int keyboards[n]: the keyboard prices
- int drives[m]: the drive prices
- int b: the budget

//* Input Format

he first line contains three space-separated integers b, n, and m, the budget, the number of keyboard models and
the number of USB drive models.
The second line contains n space-separated integers keyboard[i], the prices of each keyboard model.
The third line contains m space-separated integers drives, the prices of the USB drives.

//* Output Format

int: the maximum that can be spent, or  if it is not possible to buy both items

*/

//* SOLVING PROBLEM

//* sample input.
const budget = 10;
const keyboards = [3, 1];
const drives = [5, 2, 8];

//* this code hint from discussions.
function getMoneySpent(keyboards, drives, b) {
  return keyboards.reduce(
    (acc, curr) =>
      Math.max(acc, ...drives.map((usb) => usb + curr).filter((ku) => b >= ku)),
    -1
  );
}

//* expected result: 9
console.log(getMoneySpent(keyboards, drives, budget));
