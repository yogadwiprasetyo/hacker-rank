package hackerrank

/** PROBLEM
 *
 * A Discrete Mathematics professor has a class of students.
 * Frustrated with their lack of discipline, the professor decides to cancel class
 * if fewer than some number of students are present when class starts.
 * Arrival times go from on time (arrivalTime <= 0) to arrived late (arrivalTime > 0).
 *
 * Given the arrival time of each student and a threshold number of attendees, determine if the class is cancelled.
 *
 * Function Description
 *
 * Complete the designerPdfViewer function in the editor below.
 * it must return YES if class is cancelled, or NO otherwise.
 * angryProfessor has the following parameter(s):
 * - int k: the threshold number of students
 * - int a[n]: the arrival times of the n students
 *
 * Returns
 *
 * - string: either YES or NO
 *
 * Input Format
 *
 * The first line has two space-separated integers, n and k, the number of students (size of a) and the cancellation threshold.
 * The second line contains n space-separated integers (a[1], a[2],...,a[n]) that describe the arrival times for each student.
 * */

fun main() {
//    val shouldStudentsAttendance = 3
//    val arrivalTimeStudentsArr = arrayOf(-1, -3, 4, 2)
    // Expected output: YES

    val shouldStudentsAttendance = 2
    val arrivalTimeStudentsArr = arrayOf(0, -1, 2, 1)
    // Expected output: NO

    val infoClassCancel = angryProfessor(shouldStudentsAttendance, arrivalTimeStudentsArr)
    println(infoClassCancel)
}

/** SOLUTION
 * Complete the 'angryProfessor' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY a
 */
fun angryProfessor(k: Int, a: Array<Int>): String = if (a.filter { it <= 0 }.size >= k) "NO" else "YES"