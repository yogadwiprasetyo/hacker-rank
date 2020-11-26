/*

//* Task

Given two strings of lowercase English letters, A and B, perform the following operations:

1. Sum the lengths of A and B.
2. Determine if A is lexicographically larger than B (i.e.: does B come before A in the dictionary?).
3. Capitalize the first letter in A and B and print them on a single line, separated by a space.

//* Input Format

The first line contains a string A. The second line contains another string B. The strings are comprised of only lowercase English letters.

//* Output Format

There are three lines of output:
For the first line, sum the lengths of A and B.
For the second line, write Yes if A is lexicographically greater than B otherwise print No instead.
For the third line, capitalize the first letter in both A and B and print them on a single line, separated by a space.

*/

package hackerRank.java;

import java.util.Scanner;

public class stringsIntro {
  public static void main(String[] args) {
    
    // initial object I/O stream.
    Scanner sc=new Scanner(System.in);
    String A = sc.next();
    String B = sc.next();
    sc.close();

    // sum length, determine lexicographically, and first char upper case.
    int sumOfBothString = sumLength(A, B);
    String firstCome = determineFirstCome(A, B);
    String bothString = firstUpperCase(A)+ " " + firstUpperCase(B);

    // print the result.
    System.out.println(sumOfBothString);
    System.out.println(firstCome);
    System.out.println(bothString);
  }

  private static int sumLength(String A, String B) {
    return A.length() + B.length();
  }

  private static String determineFirstCome(String A, String B) {
    int lexicographically = A.compareTo(B);
    return (lexicographically > 0) ? "Yes" : "No";
  }

  private static String firstUpperCase(String A) {
    char first = A.charAt(0);
    char upper = Character.toUpperCase(first);
    return A.replace(first, upper);
  }
}
