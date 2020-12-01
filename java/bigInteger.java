/*

//* Task

In this problem, you have to add and multiply huge numbers! These numbers are so big that you can't contain them in any ordinary data types like a long integer.

Use the power of Java's BigInteger class and solve this problem.

//* Input Format

There will be two lines containing two numbers, a and b.

//* Output Format

Output two lines. The first line should contain a + b, and the second line should contain a x b. Don't print any leading zeros.

*/

package hackerRank.java;

import java.math.BigInteger;
import java.util.Scanner;

public class bigInteger {
  private static final Scanner scanner = new Scanner(System.in);
  public static void main(String[] args) {
    // two input stream big integer.
    BigInteger a = scanner.nextBigInteger();
    BigInteger b = scanner.nextBigInteger();
    scanner.close();

    // print result a + b and a x b
    System.out.println(a.add(b));
    System.out.println(a.multiply(b));
  }
}
