/*

//* Task

Complete the function in the editor. If a and b are case-insensitive anagrams, print "Anagrams"; otherwise, print "Not Anagrams" instead.

//* Input Format

The first line contains a string denoting a.
The second line contains a string denoting b.

//* Output Format

Print "Anagrams" if a and b are case-insensitive anagrams of each other; otherwise, print "Not Anagrams" instead.

*/

package hackerRank.java;

import java.util.Scanner;

public class anagrams {
  // Main program.
  public static void main(String[] args) {
    Scanner scan = new Scanner(System.in);
    String a = scan.next();
    String b = scan.next();
    scan.close();

    boolean ret = isAnagram(a, b);
    System.out.println( (ret) ? "Anagrams" : "Not Anagrams" );
  }

  private static boolean isAnagram (String a, String b) {
    // if length both string is not same return false.
    // because anagram must be have same length.
    if (a.length() != b.length()) {
      return false;
    }

    // declare variable.
    int totalFalse = 0;

    // convert both string to char array.
    char[] charA = a.toCharArray();
    char[] charB = b.toCharArray();


    for (int i = 0; i < charA.length; i++) {
      // the result frequency each char in array.
      int sumCharA = 0;
      int sumCharB = 0;

      for (int j = 0; j < charA.length; j++) {
        // convert each char to string.
        String cStringA = Character.toString(charA[i]);
        String cStringA2 = Character.toString(charA[j]);
        String cStringB2 = Character.toString(charB[j]);

        // if string A same with string A2
        // increment frequency string A.
        if (cStringA.equalsIgnoreCase(cStringA2)) {
          sumCharA++;
        }

        // if string A same with string B2
        // increment frequency string B.
        if (cStringA.equalsIgnoreCase(cStringB2)) {
          sumCharB++;
        }
      }

      // if the result character A and B not same
      // increment total false.
      if (sumCharA != sumCharB) {
        totalFalse++;
      }
    }

    // return true if total false zero; otherwise return false.
    return (totalFalse <= 0) ? true : false;
  }

}
