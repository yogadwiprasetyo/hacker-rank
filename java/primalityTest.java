/*

//* Task

Given a large integer, n, use the Java BigInteger class' isProbablePrime method to determine and print whether it's prime or not prime.

//* Input Format

A single line containing an integer, n (the number to be checked).

//* Output Format

If n is a prime number, print prime; otherwise, print not prime.

*/

package hackerRank.java;

import java.math.BigInteger;
import java.util.Scanner;

public class primalityTest {
  private static final Scanner scanner = new Scanner(System.in);
  public static void main(String[] args) {
    // input stream.
    BigInteger n = scanner.nextBigInteger();
    scanner.close();

    // determine input n is number prime or not.
    String result = n.isProbablePrime(1) ? "prime" : "not prime";

    // print the result.
    System.out.println(result);
  }

}
