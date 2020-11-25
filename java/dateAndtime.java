/*

//* Task

You are given a date. You just need to write the method, getDay, which returns the day on that date. To simplify your task, we have provided a portion of the code in the editor.

//* Input Format

A single line of input containing the space separated month, day and year, respectively, in MM DD YYYY format.

//* Output Format

Output the correct day in capital letters.

*/

package hackerRank.java;

import java.util.Calendar;
import java.util.Locale;
import java.util.Scanner;

public class dateAndtime {
  public static void main(String[] args) {
    // Intial object I/O stream.
    Scanner scan = new Scanner(System.in);

    // input mm-dd-yyyy;
    int month = scan.nextInt();
    int day = scan.nextInt();
    int year = scan.nextInt();

    // close stream.
    scan.close();
    
    System.out.println(findDay(month, day, year));
  }

  // * Complete the 'findDay' function below.
  //   *
  //   * The function is expected to return a STRING.
  //   * The function accepts following parameters:
  //   *  1. INTEGER month
  //   *  2. INTEGER day
  //   *  3. INTEGER year
  //   *
  public static String findDay(int month, int day, int year) {
    Calendar cal = Calendar.getInstance();
    cal.set(Calendar.MONTH, month-1);
    cal.set(Calendar.DAY_OF_MONTH, day);
    cal.set(Calendar.YEAR, year);
    return cal.getDisplayName(Calendar.DAY_OF_WEEK, Calendar.LONG, Locale.US).toUpperCase();
  }
}