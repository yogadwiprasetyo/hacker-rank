/*

//* Task

Given a string, s, and two indices, start and end, print a substring consisting of all characters in the inclusive range from start to end-1. You'll find the String class' substring method helpful in completing this challenge.

//* Input Format

The first line contains a single string denoting s.
The second line contains two space-separated integers denoting the respective values of start and end.

//* Output Format

Print the substring in the inclusive range from start to end-1.

*/

package hackerRank.java;

import java.util.Scanner;

public class substring {
  public static void main(String[] args) {
    // initial object I/O stream.
    Scanner in = new Scanner(System.in);
    String S = in.next();
    int start = in.nextInt();
    int end = in.nextInt();
    in.close();

    // substring input from I/O stream.
    String result = S.substring(start, end);
    System.out.println(result);
  }
}
