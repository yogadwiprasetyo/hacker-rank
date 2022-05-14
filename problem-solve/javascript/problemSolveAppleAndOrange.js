/*

//* PROBLEM

Sam's house has an apple tree and an orange tree that yield an abundance of fruit. 
Using the information given below, determine the number of apples and oranges that land on Sam's house.

In the diagram below:

- The red region denotes the house, where s is the start point, and t is the endpoint. 
  The apple tree is to the left of the house, and the orange tree is to its right.

- Assume the trees are located on a single point, where the apple tree is at point a, 
  and the orange tree is at point b.

- When a fruit falls from its tree, it lands d units of distance from its tree of origin along the x-axis. 
 *A negative value of d means the fruit fell d units to the tree's left, 
  and a positive value of d means it falls d units to the tree's right. *

//* Function Description

Complete the countApplesAndOranges function in the editor below. 
It should print the number of apples and oranges that land on Sam's house, each on a separate line.

countApplesAndOranges has the following parameter(s):

- s: integer, starting point of Sam's house location.
- t: integer, ending location of Sam's house location.
- a: integer, location of the Apple tree.
- b: integer, location of the Orange tree.
- apples: integer array, distances at which each apple falls from the tree.
- oranges: integer array, distances at which each orange falls from the tree.

//* Input Format

The first line contains two space-separated integers denoting the respective values of s and t.
The second line contains two space-separated integers denoting the respective values of a and b.
The third line contains two space-separated integers denoting the respective values of m and n.
The fourth line contains m space-separated integers denoting the respective distances that each apple falls from point a.
The fifth line contains n space-separated integers denoting the respective distances that each orange falls from point b.

//* Output Format

Print two integers on two different lines:

1. The first integer: the number of apples that fall on Sam's house.
2. The second integer: the number of oranges that fall on Sam's house.

*/

//* SOLVING PROBLEM

//* sample input.
const s = 7;
const t = 10;
const a = 4;
const b = 12;
const apples = [2, 3, -4];
const oranges = [3, -2, -4];

//* Complete the countApplesAndOranges function below.
function countApplesAndOranges(s, t, a, b, apples, oranges) {
  //* calculate distance fruits from trees.
  const distanceApplesFromTree = calculateDistanceFromTree(apples, a);
  const distanceOrangesFromTree = calculateDistanceFromTree(oranges, b);

  //* function for filter values fruits distance in location home or not.
  const inLocationHome = (distanceFruit) =>
    distanceFruit >= s && distanceFruit <= t;

  //* performs a filter using the had created function.
  const sumOfApplesInHome = distanceApplesFromTree.filter(inLocationHome);
  const sumOfOrangesInHome = distanceOrangesFromTree.filter(inLocationHome);

  //* print the number of apples and oranges that fall on location house.
  console.log(sumOfApplesInHome.length);
  console.log(sumOfOrangesInHome.length);
}

//* calculate values distance fruit from trees point.
function calculateDistanceFromTree(arrFruits, pointTrees) {
  //* initial variable for the result distance.
  const distanceFromTree = [];

  //* calculate distance fruits with trees point.
  for (let i = 0; i < arrFruits.length; i++) {
    let distanceFruit = pointTrees + arrFruits[i];
    distanceFromTree.push(distanceFruit);
  }

  //* return the result from calculating distance fruits with trees point.
  return distanceFromTree;
}

//* expected result: A: 1, O: 2
countApplesAndOranges(s, t, a, b, apples, oranges);
