/*

Input Format

The first line contains an integer, q, denoting the number of queries.
Each line i of the q subsequent lines contains three space-separated integers describing the respective a-i, b-i, and n-i values for that query.

Output Format

For each query, print the corresponding series on a new line. Each series must be printed in order as a single line of n space-separated integers.

*/

package hackerRank.java;

public class loopsII {
  public static void main(String[] args) {
    queriesLoops(0, 2, 10);
  }

  public static void queriesLoops(int a, int b, int n) {
    int temp = a;

    for (int i = 0; i < n; i++) {
      int si = temp + (1 << i) * b;
      temp = si;

      System.out.print(temp + " ");
    }
  }
}