/*

//* Task

You are given an integer n, you have to convert it into a string.

Please complete the partially completed code in the editor. If your code successfully converts n into a string s the code will print "Good job". Otherwise it will print "Wrong answer".

n can range between -100 to 100 inclusive.

*/

package hackerRank.java;

public class intTostring {
  public static void main(String[] args) {
    // convert integer to string.
    int n = 100;
    String s = Integer.toString(n);

    // if n same with s, print good job;
    // otherwise print wrong answer.
    if (n == Integer.parseInt(s)) {
      System.out.println("Good job");
     } else {
      System.out.println("Wrong answer.");
     }
  }
}
