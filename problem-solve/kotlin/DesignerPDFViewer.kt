/** PROBLEM
 *
 * When a contiguous block of text is selected in a PDF viewer, the selection is highlighted with a blue rectangle.
 * In this PDF viewer, each word is highlighted independently.
 *
 * There is a list of 26 character heights aligned by index to their letters.
 * For example, 'a' is at index 0 and 'z' is at index 25. There will also be a string. Using the letter heights given,
 * determine the area of the rectangle highlight in mm^2 assuming all letters are 1mm wide.
 *
 * Function Description
 *
 * Complete the designerPdfViewer function in the editor below.
 * designerPdfViewer has the following parameter(s):
 * - int h[26]: the heights of each letter
 * - string word: a string
 *
 * Returns
 *
 * - int: the size of the highlighted area
 *
 * Input Format
 *
 * The first line contains  space-separated integers describing the respective heights of each consecutive lowercase English letter, ascii[a-z].
 * The second line contains a single word consisting of lowercase English alphabetic letters.
 * */

fun main() {
    val heights = arrayOf(1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5)
    val word = "abc"
    // expectation output: 9

    // val heights = arrayOf(1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7)
    // val word = "zaba"
    // expectation output: 28

    val result = designerPdfViewer(heights, word)
    println(result)
}

/** SOLUTION
 *
 * Complete the 'designerPdfViewer' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY heights
 *  2. STRING word
 * */
fun designerPdfViewer(heights: Array<Int>, word: String): Int {
    val charArr = word.toCharArray()
    var tallestChar = heights[positionLetter(charArr[0])]

    charArr.forEach { letter ->
        val height = heights[positionLetter(letter)]
        if (tallestChar < height) {
            tallestChar = height
        }
    }

    return tallestChar * charArr.size
}

fun positionLetter(letter: Char): Int {
    val listOfLetter = listOf('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z')
    return listOfLetter.indexOf(letter)
}
