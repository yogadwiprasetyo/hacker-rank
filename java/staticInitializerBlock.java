/*

//* Task

Static initialization blocks are executed when the class is loaded, and you can initialize static variables in those blocks.

It's time to test your knowledge of Static initialization blocks. You can read about it here.

You are given a class Solution with a main method. Complete the given code so that it outputs the area of a parallelogram with breadth B and height H. You should read the variables from the standard input.

//* Input Format

There are two lines of input. The first line contains B: the breadth of the parallelogram. The next line contains H: the height of the parallelogram.

//* Output Format

If both values are greater than zero, then the main method must output the area of the parallelogram. Otherwise, print "java.lang.Exception: Breadth and height must be positive" without quotes.

*/

package hackerRank.java;

import java.util.Scanner;

public class staticInitializerBlock {
  static {
    // input stream.
    Scanner sc = new Scanner(System.in);
    int B = sc.nextInt();
    int H = sc.nextInt();
    sc.close();

    // B or H must be positive.
    if (B <= 0 || H <= 0) {
      System.out.println("java.lang.Exception: Breadth and height must be positive");
    } else {
      System.out.print(B*H);
    }
  }

  public static void main(String[] args) {}
}
