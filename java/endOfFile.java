/*

//* Task

The challenge here is to read n lines of input until you reach EOF, then number and print all n lines of content.

Hint: Java's Scanner.hasNext() method is helpful for this problem.

//* Input Format

Read some unknown n lines of input from stdin(System.in) until you reach EOF; each line of input contains a non-empty String.

//* Output Format

For each line, print the line number, followed by a single space, and then the line content received as input.

*/

package hackerRank.java;

import java.util.Scanner;

public class endOfFile {
  public static void main(String[] args) {
    // initial variable lines.
    int line = 1;

    // initial object input output stream.
    Scanner scan = new Scanner(System.in);

    // read input stream until end-of-file.
    while (scan.hasNext()) {
        String text = scan.nextLine();
        System.out.printf("%1$d %2$s \n", line, text);
        line++;
    }
    scan.close();
  }
}
