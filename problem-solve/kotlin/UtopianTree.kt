package hackerrank

/** PROBLEM
 *
 * The Utopian Tree goes through 2 cycles of growth every year. Each spring, it doubles in height.
 * Each summer, its height increases by 1 meter.
 *
 * A Utopian Tree sapling with a height of 1 meter is planted at the onset of spring.
 * How tall will the tree be after n growth cycles?
 *
 * Function Description
 *
 * Complete the designerPdfViewer function in the editor below.
 * utopianTree has the following parameter(s):
 * - int n: the number of growth cycles to simulate
 *
 * Returns
 *
 * - int: the height of the tree after the given number of cycles
 *
 * Input Format
 *
 * The first line contains an integer, t, the number of test cases.
 * t subsequent lines each contain an integer, n, the number of cycles for that test case.
 * */

fun main() {
    val result = utopianTree(4) // expectation output 7
//    val result = utopianTree(10) // expectation output 63
//    val result = utopianTree(7) // expectation output 30
    println(result)
}

/** SOLUTION
 * Complete the 'utopianTree' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */
fun utopianTree(n: Int): Int {
    if (n == 0 || n == 1 || n == 2) {
        return n + 1
    }

    var temporaryHeight = 3
    for (cycle in 3..n) {
        if (cycle % 2 == 1) {
            temporaryHeight *= 2 // On Spring cycle
        } else {
            temporaryHeight += 1 // On summer cycle
        }
    }

    return temporaryHeight
}