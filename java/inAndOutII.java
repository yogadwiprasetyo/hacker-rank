/*

//* Input Format

There are three lines of input:

1. The first line contains an integer.
2. The second line contains a double.
3. The third line contains a String.

//* Output Format

There are three lines of output:

1. On the first line, print String: followed by the unaltered String read from stdin.
2. On the second line, print Double: followed by the unaltered double read from stdin.
3. On the third line, print Int: followed by the unaltered integer read from stdin.

To make the problem easier, a portion of the code is already provided in the editor.

*/

package hackerRank.java;

import java.util.Scanner;

public class inAndOutII {
  public static void main(String[] args) {
    // Initial object input stream.
    Scanner scan = new Scanner(System.in);

    // saving input to variabel.
    int i = Integer.parseInt(scan.nextLine());
    double d = Double.parseDouble(scan.nextLine());
    String s = scan.nextLine();
    scan.close();

    // print variable contains value input.
    System.out.println("String: " + s);
    System.out.println("Double: " + d);
    System.out.println("Int: " + i);
  }
}
