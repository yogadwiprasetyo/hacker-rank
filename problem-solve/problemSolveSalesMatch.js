/*

//* PROBLEM
Alex works at a clothing store. There is a large pile of socks that must be paired by color for sale.
Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

Function Description

Complete the sockMerchant function in the editor below. 
It must return an integer representing the number of matching pairs of socks that are available.

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

// filter pairs of socks in array.
function filterSocksOfMatching(arr, socks) {
  // declaration and initial variable.
  let divideArr = [];
  const lengthSocks = 2;

  // filter the pairs of socks.
  const pairsSocks = arr.filter((arrValue) => arrValue === socks);
  const pairLength = pairsSocks.length;

  // if pair length is same with length socks
  // return arr multidimensional.
  if (pairLength === lengthSocks) {
    return [pairsSocks];
  }

  // length arr pairs divide half.
  const divideArrLength = Math.floor(pairsSocks.length / 2);

  // divide array pairs to total length two.
  for (let i = 0; i < divideArrLength; i++) {
    let divide = [];

    // separated two value in arr pairs.
    for (let j = 0; j < lengthSocks; j++) {
      divide.push(pairsSocks[j]);
    }

    // push to container.
    divideArr.push(divide);
  }

  // return array multidimensional.
  return divideArr;
}

// Complete the sockMerchant function below.
function sockMerchant(n, arr) {
  // declaration and initial variable.
  const pairsOfSocks = [];
  const lengthSocks = 2;

  // remove duplicate value in arr.
  const removeDuplicate = (ar, index) => arr.indexOf(ar) === index;
  const theRestOfSocks = arr.filter(removeDuplicate);

  for (let i = 0; i < theRestOfSocks.length; i++) {
    // socksOfMatching: Array
    // filter pairs of socks in array.
    let socksOfMatching = filterSocksOfMatching(arr, theRestOfSocks[i]);

    // if socksOfMatching is array and push to pairsOfSocks.
    if (Array.isArray(socksOfMatching)) {
      // access array multidimensional to get values.
      for (let j = 0; j < socksOfMatching.length; j++) {
        pairsOfSocks.push(socksOfMatching[j]);
      }
    }
  }

  // filter array pairs.
  const arrPairsOfSocks = (pairs) => pairs.length === lengthSocks;
  const totalMatchingPairsOfSocks = pairsOfSocks.filter(arrPairsOfSocks);

  // return the total number of matching pairs of socks that Alex can sell.
  return totalMatchingPairsOfSocks.length;
}

//* expected result: 3
console.log(sockMerchant(n, arr));
