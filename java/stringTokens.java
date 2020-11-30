/*

//* Task

Given a string, s, matching the regular expression [A-Za-z !,?._'@]+, split the string into tokens. We define a token to be one or more consecutive English alphabetic letters. Then, print the number of tokens, followed by each token on a new line.

Note: You may find the String.split method helpful in completing this challenge.

//* Input Format

A single string, s.

//* Output Format

On the first line, print an integer, n, denoting the number of tokens in string s (they do not need to be unique). Next, print each of the n tokens on a new line in the same order as they appear in input string s.

*/

package hackerRank.java;

import java.util.Scanner;

public class stringTokens {
  public static void main(String[] args) {
    Scanner scan = new Scanner(System.in);
    String s = scan.nextLine();
      boolean isLengthZero = s.trim().length() == 0;
      boolean isLengthBig = s.trim().length() > 400000;

      if (isLengthZero || isLengthBig) {
        System.out.println(0);
        scan.close();
        return;
      }

      // split into arrays string.
      String[] words = s.trim().split("[ !,?.\\_'@]+");

      // print length n words.
      System.out.println(words.length);

      // print word split.
      for (String word : words) {
        System.out.println(word);
      }

    scan.close();
  }
}