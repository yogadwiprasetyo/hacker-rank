/*

//* Task

Given a string, s, and an integer, k, complete the function so that it finds the lexicographically smallest and largest substrings of length k.

//* Input Format

The first line contains a string denoting s.
The second line contains an integer denoting k.

//* Output Format

Return the respective lexicographically smallest and largest substrings as a single newline-separated string.

*/

package hackerRank.java;

import java.util.Scanner;

public class substringComparisons {
  public static void main(String[] args) {
    Scanner scan = new Scanner(System.in);
    String s = scan.next();
    int k = scan.nextInt();
    scan.close();
  
    System.out.println(getSmallestAndLargest(s, k));
  }

  public static String getSmallestAndLargest(String s, int k) {
    // initial substr smallest and largest.
    String sequence = s.substring(0, k);
    String smallest = sequence;
    String largest = sequence;

    // Complete the function
    for(int i = 1; i <= (s.length() - k); i++){
      // substr with end i + k;
      sequence = s.substring(i, (i + k));

      // compare string to get smallest substr.
      if(sequence.compareTo(smallest) < 0){
        smallest = sequence;
      }

      // compare string to get largest substr.
      if(sequence.compareTo(largest) > 0){
        largest = sequence;
      }
    }

    // return string substr largest and smallest.
    return smallest + "\n" + largest;
  }

}