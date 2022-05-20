package hackerrank

/** PROBLEM
 *
 * A child is playing a cloud hopping game. 
 * In this game, there are sequentially numbered clouds that can be thunderheads or cumulus clouds. 
 * The character must jump from cloud to cloud until it reaches the start again.
 *
 * There is an array of clouds, c and an energy level e = 100. 
 * The character starts from c[0] and uses 1 unit of energy to make a jump of size k to cloud c[(i + k) % n]. 
 * If it lands on a thundercloud, c[i] = 1, its energy (e) decreases by 2 additional units. 
 * The game ends when the character lands back on cloud 0.
 *
 * Given the values of n, k, and the configuration of the clouds as an array c, determine the final value of e after the game ends.
 *
 * Function Description
 *
 * Complete the jumpingOnClouds function in the editor below.
 * jumpingOnClouds has the following parameter(s):
 * - int c[n]: the cloud types along the path
 * - int k: the length of one jump
 *
 * Returns
 *
 * - int: the energy level remaining.
 *
 * Input Format
 *
 * The first line contains two space-separated integers, n and k, the number of clouds and the jump distance.
 * The second line contains n space-separated integers c[i] where 0 <= i <= n. 
 * */
 
 fun main() {
    // val p = arrayOf(0, 0, 1, 0, 0, 1, 1, 0)
    // val k = 2
    // Expected output: 92

    val c = arrayOf(1, 1, 1, 0, 1, 1, 0, 0, 0, 0)
    val k = 3
    // Expected output: 80

    val result = jumpingOnClouds(c, k)
    println(result)
}

// Complete the jumpingOnClouds function below.
fun jumpingOnClouds(c: Array<Int>, k: Int): Int {
    // Write code here
    val sizeArr = c.size
    var energy = 100
    var jump = k
    
    while (true) {
    	// Tracking end position on c[0].
    	// Checking if jump size more than length of array
    	// override jump value to endPosition.
    	// Checking value on cloud n, if 1 decrease 3 energy else 1 energy.
    	// Increase jump size with the length of one jump (k).
    	// And if end position with value 0 the jump is end with position c[0].
    
        val endPosition = jump % sizeArr
        if (jump >= sizeArr) jump = endPosition
        
        val cloudValue = c[jump]
        energy -= if (cloudValue == 1) 3 else 1
        
        jump += k
        if (endPosition == 0) break
    }
    return energy  
}
