package hackerrank

import kotlin.math.abs

/** PROBLEM
 *
 * Lily likes to play games with integers. She has created a new game where she determines the difference between a number and its reverse.
 * For instance, given the number 12, its reverse is 21. Their difference is 9.
 * The number 120 reversed is 21, and their difference is 99.
 *
 * She decides to apply her game to decision-making. She will look at a numbered range of days and will only go to a movie on a beautiful day.
 *
 * Given a range of numbered days, [i .. j] and a number k, determine the number of days in the range that are beautiful.
 * Beautiful numbers are defined as numbers where |i-reverse(i)| is evenly divisible by k.
 * If a day's value is a beautiful number, it is a beautiful day. Return the number of beautiful days in the range.
 *
 * Function Description
 *
 * Complete the beautifulDays  function in the editor below.
 * utopianTree has the following parameter(s):
 * - int i: the starting day number
 * - int j: the ending day number
 * - int k: the divisor
 *
 * Returns
 *
 * - int: the number of beautiful days in the range
 *
 * Input Format
 *
 * A single line of three space-separated integers describing the respective values of i, j, and k.
 * */

fun main() {
//    val startingDay = 20
//    val endDay = 23
//    val divisor = 6
    // Expected output: 2

    val startingDay = 13
    val endDay = 45
    val divisor = 3
    // Expected output: 33

    val result = beautifulDays(startingDay, endDay, divisor)
    println(result)
}

/** SOLUTION
 *
 * Complete the 'beautifulDays' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER i
 *  2. INTEGER j
 *  3. INTEGER k
 */
fun beautifulDays(i: Int, j: Int, k: Int): Int {
    var beautifulDays = 0
    for (days in i..j) {

        // Reverse the number in i until j
        // Divide the days and reverse days to get number beautiful days
        // check if the result is number beautiful days, yes increment total beautiful days
        val daysReverse = days.toString().reversed().toInt()
        val result = abs((days - daysReverse)).toDouble() / k
        val isEndNumberZero = result.toString().last() == '0'

        if (isEndNumberZero) beautifulDays++
    }
    return beautifulDays
}