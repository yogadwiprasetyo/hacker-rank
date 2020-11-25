/*

//* PROBLEM
You have been asked to help study the population of birds migrating across the continent. 
Each type of bird you are interested in will be identified by an integer value. 
Each time a particular kind of bird is spotted, its id number will be added to your array of sightings. 
You would like to be able to find out which type of bird is most common given a list of sightings. 
Your task is to print the type number of that bird and if two or more types of birds are equally common, choose the type with the smallest ID number.

//* Function Description

Complete the migratoryBirds function in the editor below. 
It should return the lowest type number of the most frequently sighted bird.

migratoryBirds has the following parameter(s):

arr: an array of integers representing types of birds sighted

//* Input Format

The first line contains an integer denoting n, the number of birds sighted and reported in the array arr.
The second line describes arr as n space-separated integers representing the type numbers of each bird sighted.

//* Output Format

Print the type number of the most common bird; 
if two or more types of birds are equally common, choose the type with the smallest ID number.

*/

//* SOLVING PROBLEM

//* sample input.
const arr = [1, 4, 4, 4, 5, 3];

// calculate every frequency type birds
function calculateFreqType(arr) {
  // list of frequency every type birds.
  const freqType = [];

  // type birds from 1 - 5
  const allType = 5;

  // Filter every type birds from 1 - 5,
  // then calculate length or frequency from type birds.
  for (let i = 1; i <= allType; i++) {
    const typeBirds = arr.filter((type) => type === i);
    freqType.push(typeBirds.length);
  }

  // return array.
  return freqType;
}

// search highest frequency in type birds
function searchHighFreq(arr) {
  // initial value high.
  let high = arr[0];

  // if value[i] more than initial high value,
  // change high to value[i] until the highest high value.
  for (let i = 0; i < arr.length; i++) {
    if (high < arr[i]) {
      high = arr[i];
    }
  }

  // return integer
  return high;
}

// Complete the migratoryBirds function below.
function migratoryBirds(arr) {
  // freqType: Arr
  // highFreq: Int
  // calculate every frequency type birds
  // search high value in frequency type birds
  const freqType = calculateFreqType(arr);
  const highFreq = searchHighFreq(freqType);

  // determine the type of bird with the highest frequency
  for (let i = 0; i < freqType.length; i++) {
    if (freqType[i] === highFreq) {
      return i + 1;
    }
  }
}

//* expected result: 4
console.log(migratoryBirds(arr));
