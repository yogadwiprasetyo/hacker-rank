/*

//* Task

Given a string A, print Yes if it is a palindrome, print No otherwise.

note: A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward.(Wikipedia)
*/

package hackerRank.java;

import java.util.Scanner;

public class stringReverse {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    String A = sc.next();
    sc.close();

    // if is palindrome print yes;
    // otherwise print no.
    if (isPalindrome(A)) {
      System.out.print("Yes");
    } else {
      System.out.print("No");
    }
  }

  // determine some string is include palindrome or not.
  private static boolean isPalindrome(String A) {
    char[] charstring = A.toCharArray();
    String reverse = "";
    
    // reverse string and keep the char to variable.
    for (int i = A.length()-1; i >= 0; i--) {
      String charReverse = Character.toString(charstring[i]);
      reverse += charReverse;
    }

    // is reverse string equals with string A, return true; otherwise return false.
    return (reverse.equalsIgnoreCase(A)) ? true : false;
  }
}
