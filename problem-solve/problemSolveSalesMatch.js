/*

//* PROBLEM
Alex works at a clothing store. There is a large pile of socks that must be paired by color for sale. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

Function Description

Complete the sockMerchant function in the editor below. It must return an integer representing the number of matching pairs of socks that are available.

sockMerchant has the following parameter(s):

- n: the number of socks in the pile
- ar: the colors of each sock

Input Format

The first line contains an integer n, the number of socks represented in ar.
The second line contains n space-separated integers describing the colors ar[i] of the socks in the pile.

Output Format

Return the total number of matching pairs of socks that Alex can sell.
*/

// TODO: REFACTOR CODE

//* SOLVING PROBLEM
//* sample input.
const arr = [10, 20, 20, 10, 10, 30, 50, 10, 20];
const n = 9;

// Complete the sockMerchant function below.
function sockMerchant(n, arr) {
  // declaration and initial variable.
  const socksMatching = [];
  const lengthSocks = 2;

  // remove duplicate value in arr.
  const removeDuplicate = (ar, index) => arr.indexOf(ar) === index;
  const theRestOfArr = arr.filter(removeDuplicate);

  for (let i = 0; i < theRestOfArr.length; i++) {
    // pairsOfSocks: Array
    // filter pairs of socks in array.
    let pairsOfSocks = filterPairsOfSocks(arr, theRestOfArr[i]);
    console.log("Pairs of: ", pairsOfSocks);

    // if pairsOfSocks is array and push to socksMatching.
    if (Array.isArray(pairsOfSocks)) {
      // access array value in array multidimensional.
      for (let j = 0; j < pairsOfSocks.length; j++) {
        socksMatching.push(pairsOfSocks[j]);
      }
    }
  }

  // filter array pairs.
  const arrPairsOfSocks = (pairs) => pairs.length === lengthSocks;
  const totalMatchingPairsOfSocks = socksMatching.filter(arrPairsOfSocks);

  // return the total number of matching pairs of socks that Alex can sell.
  return totalMatchingPairsOfSocks.length;
  // return socksMatching;
}

// TODO: REFACTOR CODE

// filter pairs of socks in array.
function filterPairsOfSocks(arr, socks) {
  let divideArr = [];
  const lengthSocks = 2;
  const pairsSocks = arr.filter((arrValue) => arrValue === socks);
  const pairLength = pairsSocks.length;

  if (pairLength === lengthSocks) {
    return [pairsSocks];
  }

  const divideArrLength = Math.floor(pairsSocks.length / 2);
  for (let i = 0; i < divideArrLength; i++) {
    let divide = [];

    for (let j = 0; j < lengthSocks; j++) {
      divide.push(pairsSocks[j]);
    }

    divideArr.push(divide);
  }

  return divideArr;
}

//* expected result: 3
console.log(sockMerchant(n, arr));
