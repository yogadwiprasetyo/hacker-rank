/*

//* PROBLEM

Two cats and a mouse are at various positions on a line. You will be given their starting positions. 
Your task is to determine which cat will reach the mouse first, assuming the mouse does not move and the cats travel at equal speed. 
If the cats arrive at the same time, the mouse will be allowed to move and it will escape while they fight.

You are given q queries in the form of x, y, and z representing the respective positions for cats A and B, and for mouse C. 
Complete the function catAndMouse to return the appropriate answer to each query, which will be printed on a new line.

If cat A catches the mouse first, print Cat A.
If cat B catches the mouse first, print Cat B.
If both cats reach the mouse at the same time, print Mouse C as the two cats fight and mouse escapes.

//* Function Description

Complete the catAndMouse function in the editor below.

catAndMouse has the following parameter(s):

int x: Cat A's position
int y: Cat B's position
int z: Mouse C's position

//* Input Format

The first line contains a single integer, q, denoting the number of queries.
Each of the q subsequent lines contains three space-separated integers describing the respective values of x (cat A's location),  
y (cat B's location), and z (mouse C's location).

//* Output Format

string: Either 'Cat A', 'Cat B', or 'Mouse C'

*/

//* SOLVING PROBLEM

//* sample input.
const positionCatA = 1;
const positionCatB = 3;
const positionMouse = 2;

// Complete the catAndMouse function below.
function catAndMouse(posCatA, posCatB, posMouse) {
    // mengambil perbandingan posisi antara cat and mouse.
    const diffPosAWithMouse = Math.abs(posMouse - posCatA);
    const diffPosBWithMouse = Math.abs(posMouse - posCatB);
    
    // kondisi untuk posisi siapa yang lebih dekat dengan mouse.
    const isCatANearMouse = diffPosAWithMouse < diffPosBWithMouse;
    const isCatBNearMouse = diffPosAWithMouse > diffPosBWithMouse;
    
    // check kondisi untuk posisi yang lebih dekat dengan mouse.
    if (isCatANearMouse) {
        return "Cat A";
    } else if (isCatBNearMouse) {
        return "Cat B";
    }
    
    // jika perbedaan posisi cat sama.
    return "Mouse C";
}


//* expected result: Mouse C
console.log(catAndMouse(positionCatA, positionCatB, positionMouse));




