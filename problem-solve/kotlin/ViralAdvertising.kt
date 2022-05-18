package hackerrank

import kotlin.math.floor

/** PROBLEM
 *
 * HackerLand Enterprise is adopting a new viral advertising strategy. When they launch a new product,
 * they advertise it to exactly 5 people on social media.
 *
 * On the first day, half of those 5 people (i.e., floor(5/2) = 2) like the advertisement and each shares it with 3 of their friends.
 * At the beginning of the second day, floor(5/2) x 3 = 6 people receive the advertisement.
 *
 * Each day, floor(recipients/2) of the recipients like the advertisement and will share it with 3 friends on the following day.
 * Assuming nobody receives the advertisement twice, determine how many people have liked the ad by the end of a given day, beginning with launch day as day 1.
 *
 * Function Description
 *
 * Complete the viralAdvertising function in the editor below.
 * utopianTree has the following parameter(s):
 * - int n: the day number to report
 *
 * Returns
 *
 * - int: the cumulative likes at that day
 *
 * Input Format
 *
 * A single integer, n, the day number.
 * */

fun main() {
    // val days = 3
    // Expected output: 9

    val days = 4
    // Expected output: 15

    val result = viralAdvertising(days)
    println(result)
}

/** SOLUTION
 *
 * Complete the 'viralAdvertising' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */
fun viralAdvertising(n: Int): Int {
    var sharedAds = 5
    val peopleFriends = 3
    var totalPeopleLiked = 0

    for (days in 1..n) {
        val peopleLiked = floor(sharedAds / 2.toDouble()).toInt()
        sharedAds = peopleLiked * peopleFriends
        totalPeopleLiked += peopleLiked
    }

    return totalPeopleLiked
}