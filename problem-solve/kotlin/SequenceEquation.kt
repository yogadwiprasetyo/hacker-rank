package hackerrank

/** PROBLEM
 *
 * Given a sequence of n integers, p(1), p(2),...,p(n) where each element is distinct and satisfies 1 <= p(x) <= n.
 * For each x where 1 <= x <= n, that is x increments from 1 to n, find any integer y such that p(p(y)) == x and keep a history of the values of y in a return array.
 *
 * Function Description
 *
 * Complete the permutationEquation function in the editor below.
 * utopianTree has the following parameter(s):
 * - int p[n]: an array of integers
 *
 * Returns
 *
 * - int[n]: the values of y for all x in the arithmetic sequence 1 to n
 *
 * Input Format
 *
 * The first line contains an integer n, the number of elements in the sequence.
 * The second line contains n space-separated integers p[i] where 1 <= i <= n.
 * */

fun main() {
    // val p = arrayOf(2, 3, 1)
    // Expected output: 2 3 1

    val p = arrayOf(4, 3, 5, 1, 2)
    // Expected output: 1 3 5 4 2

    val result = permutationEquation(p)
    println(result.joinToString(" "))
}

/** SOLUTION
 *
 * Complete the 'permutationEquation' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY p as parameter.
 */
fun permutationEquation(p: Array<Int>): Array<Int> {
    val history = ArrayList<Int>()
    for (x in 1..p.size) {
        history.add(p.indexOf(p.indexOf(x) + 1) + 1)
    }
    return history.toTypedArray()
}