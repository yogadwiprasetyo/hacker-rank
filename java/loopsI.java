/*

Task
Given an integer, N, print its first 10 multiples. Each multiple N x i (where 1 <= i <= 10) should be printed on a new line in the form: N x i = result.

Input Format

A single integer, N.


Output Format

Print 10 lines of output; each line i (where 1 <= i <= 10)
contains the result of N x i in the form:
N x i = result.

*/

package hackerRank.java;

public class loopsI {
  public static void main(String[] args) {
    multipleOnetoTen(2);
  }

  // N x i = result.
  public static void multipleOnetoTen(int n) {
    for (int i = 1; i <= 10; i++) {
      int result = n * i;
      System.out.printf("%1$d x %2$d = %3$d \n", n, i, result);
    }
  }
}
