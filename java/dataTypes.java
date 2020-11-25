/*

//* Task

Given an input integer, you must determine which primitive data types are capable of properly storing that input.

To get you started, a portion of the solution is provided for you in the editor.

Reference: https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html

//* Input Format

The first line contains an integer, T, denoting the number of test cases.
Each test case, T, is comprised of a single line with an integer, n, which can be arbitrarily large or small.

//* Output Format

For each input variable n and appropriate primitive dataType, you must determine if the given primitives are capable of storing it. If yes, then print:

n can be fitted in:
* dataType

If there is more than one appropriate data type, print each one on its own line and order them by size (i.e.: byte < int < short < long).

If the number cannot be stored in one of the four aforementioned primitives, print the line:

n can't be fitted anywhere.

*/

package hackerRank.java;

import java.util.Scanner;

public class dataTypes {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    try
    {
      long x=sc.nextLong();
      System.out.println(x+" can be fitted in:");
      determineDataTypes(x);
    }
    catch(Exception e)
    {
      System.out.println(sc.next()+" can't be fitted anywhere.");
    }

    sc.close();
  }

  // calculate limits data types.
  public static double limits(double power) {
    return Math.pow(2.0, power);
  }

  // determine which primitive data types are capable of properly storing that input.
  public static void determineDataTypes(long x) {
    double shortLimits = limits(15.0);
    double intLimits = limits(31.0);
    double longLimits = limits(63.0);

    if(x >= -128 && x <= 127) System.out.println("* byte");
    if (x >= -shortLimits && x <= (shortLimits-1)) System.out.println("* short");
    if (x >= -intLimits && x <= (intLimits-1)) System.out.println("* int");
    if (x >= -longLimits && x <= (longLimits-1)) System.out.println("* long");
  }
}