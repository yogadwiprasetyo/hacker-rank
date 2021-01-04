/*

//* Task

A Java interface can only contain method signatures and fields. The interface can be used to achieve polymorphism. In this problem, you will practice your knowledge on interfaces.

You are given an interface AdvancedArithmetic which contains a method signature int divisor_sum(int n). You need to write a class called MyCalculator which implements the interface.

divisorSum function just takes an integer as input and return the sum of all its divisors. For example divisors of 6 are 1, 2, 3 and 6, so divisor_sum should return 12. The value of n will be at most 1000.

Read the partially completed code in the editor and complete it. You just need to write the MyCalculator class only. Your class shouldn't be public.

*/

package hackerRank.java;

import java.util.Scanner;

interface AdvancedArithmetic{
  int divisor_sum(int n);
}

// FINISH TASK
// Write your code here
class MyCalculator implements AdvancedArithmetic {
  @Override
  public int divisor_sum (int n) {
    // declaration variable sum.
    int sum = 0;

    // loop number from one until n.
    for (int i = 1; i <= n; i++) {

      // if n mod i is zero
      // adding sum with i.
      if (n % i == 0) {
        sum += i;
      }
    }
    
    // return the result sum.
    return sum;
  }
}

public class javaInterface {
  public static void main(String[] args) {
    MyCalculator my_calculator = new MyCalculator();
    Scanner sc = new Scanner(System.in);
    int n = sc.nextInt();
    System.out.print(my_calculator.divisor_sum(n) + "\n");
    sc.close();
  }
}
