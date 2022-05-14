/*

//* PROBLEM

Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. 
She tabulates the number of times she breaks her season record for most points and least points in a game. 
Points scored in the first game establish her record for the season, and she begins counting from there.

//* Function Description

Function Description

Complete the breakingRecords function in the editor below.
It must return an integer array containing the numbers of times she broke her records.
Index 0 is for breaking most points records, and index 1 is for breaking least points records.

breakingRecords has the following parameter(s):

scores: an array of integers

//* Input Format

The first line contains an integer n, the number of games.
The second line contains n space-separated integers describing
the respective values of score-0, score-1, ..., score-(n-1).

//* Output Format

Print two space-seperated integers describing the respective numbers of times
the best (highest) score increased and the worst (lowest) score decreased.

*/

//* SOLVING PROBLEM

//* sample input.
const scores = [3, 4, 21, 36, 10, 28, 35, 5, 24, 42];

//* Complete the breakingRecords function below.
function breakingRecords(scores) {
  //* initial variable.
  let bestRecord = 0,
    worstRecord = 0;

  //* declaration of temporary min and max score variables.
  let maxScore = scores[0];
  let minScore = scores[0];

  for (let i = 0; i < scores.length; i++) {
    //* if maxScore change increment best record.
    //* else if minScore change increment worst record.
    if (maxScore < scores[i]) {
      maxScore = scores[i];
      bestRecord++;
    } else if (minScore > scores[i]) {
      minScore = scores[i];
      worstRecord++;
    }
  }

  //* return best and worst scores record.
  return [bestRecord, worstRecord];
}

//* expected result: B: 4, W: 0
breakingRecords(scores);
