/*

//* Task

Given an integer, n, perform the following conditional actions:
If n is odd, print Weird
If n is even and in the inclusive range of 2 to 5, print Not Weird
If n is even and in the inclusive range of 6 to 20, print Weird
If n is even and greater than 20, print Not Weird
Complete the stub code provided in your editor to print whether or not n is weird.

//* Input Format

A single line containing a positive integer, n.

//* Output Format

Print Weird if the number is weird; otherwise, print Not Weird.

*/

package hackerRank.java;

public class ifElse {
  public static void main(String[] args) {
    DecisionNumbers(24);
  }

  public static void DecisionNumbers(int numbers) {
    // perform the following conditional actions.
    boolean isOdd = (numbers % 2) == 1;
    boolean isEven = !(isOdd);
    boolean isRangeTwotoFive = numbers >= 2 && numbers <= 5;
    boolean isRangeSixtoTwenty = numbers >= 6 && numbers <= 20;
    
    // message for output.
    String weird = "Weird";
    String notWeird = "Not Weird";

    // actions.
    if (isOdd) {
      System.out.println(weird);
    } else if (isEven && isRangeTwotoFive) {
      System.out.println(notWeird);
    } else if (isEven && isRangeSixtoTwenty) {
      System.out.println(weird);
    } else {
      System.out.println(notWeird);
    }
  }
}
