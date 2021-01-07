/*

//* Task

Create a class MyCalculator which consists of a single method long power(int, int). This method takes two integers, n and p, as parameters and finds Np. If either n or p is negative, then the method must throw an exception which says "n or p should not be negative.". Also, if both n and p are zero, then the method must throw an exception which says "n and p should not be zero."

//* Input Format

Each line of the input contains two integers, n and p. The locked stub code in the editor reads the input and sends the values to the method as parameters.

//* Output Format

Each line of the output contains the result Np, if both n and p are positive. If either n or p is negative, the output contains "n and p should be non-negative". If both n and p are zero, the output contains "n and p should not be zero.".

*/

package hackerRank.java;

import java.util.*;

// FINISH TASK
class MyCalc {
  /*
  * Create the method long power(int, int) here.
  */
  long power (int n, int p) throws Exception {
    // throw the exceptions.
    if (this.isZero(n) && this.isZero(p)) {
      throw new Exception("n and p should not be zero.");
    } else if (this.isNegative(n) || this.isNegative(p)) {
      throw new Exception("n or p should not be negative.");
    }
    
    // calculate the n power p.
    long result = 1;
    for (int i = 1; i <= p; i++) {
      result *= n;
    }
    
    // return the result.
    return result;
  }
  
  // method check condition a number is zero.
  boolean isZero (int r) {
    return (r == 0) ? true : false;
  }
  
  // method check condition a number is negative.
  boolean isNegative (int r) {
    return (r < 0) ? true : false;
  }
}

public class exceptionHandling {
  // DEFAULT CODE
  public static final MyCalc my_calculator = new MyCalc();
  public static final Scanner in = new Scanner(System.in);

  public static void main(String[] args) {
    // DEFAULT CODE
    while (in .hasNextInt()) {
      int n = in .nextInt();
      int p = in .nextInt();
      
      try {
        System.out.println(my_calculator.power(n, p));
      } catch (Exception e) {
        System.out.println(e);
      }
    }
  }
}