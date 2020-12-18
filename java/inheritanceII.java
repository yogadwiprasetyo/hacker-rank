/*

//* Task

1. A class named Arithmetic with a method named add that takes 2 integers as parameters and returns an integer denoting their sum.
2. A class named Adder that inherits from a superclass named Arithmetic.
Your classes should not be be PUBLIC.

//* Input Format

You are not responsible for reading any input from stdin; a locked code stub will test your submission by calling the add method on an Adder object and passing it 2 integer parameters.

//* Output Format

You are not responsible for printing anything to stdout. Your add method must return the sum of its parameters.

*/

package hackerRank.java;

// FINISH TASK
class Arithmetic {
  public int add (int n1, int n2) {
    return n1 + n2;
  }
}

// FINISH TASK
class Adder extends Arithmetic {}

public class inheritanceII {
  public static void main(String[] args) {
    // INPUT AND OUTPUT

    // Create a new Adder object
    Adder a = new Adder();
        
    // Print the name of the superclass on a new line
    System.out.println("My superclass is: " + a.getClass().getSuperclass().getName());
    
    // Print the result of 3 calls to Adder's `add(int,int)` method as 3 space-separated integers:
    System.out.print(a.add(10,32) + " " + a.add(10,3) + " " + a.add(10,10) + "\n");
  }
}
