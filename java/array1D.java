/*

//* Task

Create an array, a, capable of holding n integers.
Modify the code in the loop so that it saves each sequential value to its corresponding location in the array. For example, the first value must be stored in a0, the second value must be stored in a1, and so on.

//* Input Format

The first line contains a single integer, n, denoting the size of the array.
Each line i of the n subsequent lines contains a single integer denoting the value of element a1.

//* Output Format

You are not responsible for printing any output to stdout. Locked code in the editor loops through array  and prints each sequential element on a new line.


*/


package hackerRank.java;

import java.util.Scanner;

public class array1D {
  public static void main(String[] args) {
    Scanner scan = new Scanner(System.in);
    int n = scan.nextInt();

    // finish task.
    int[] a = new int[n];
    for (int i = 0; i < n; i++) {
      a[i] = scan.nextInt();
    } 
    scan.close();

    // Prints each sequential element in array a
    for (int i = 0; i < a.length; i++) {
      System.out.println(a[i]);
    }
  }
}