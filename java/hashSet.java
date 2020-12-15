/*

//* Task

You are given n pairs of strings. Two pairs (a,b) and (c,d) are identical if a=c and b=d. That also implies (a,b) is not same as (b,a). After taking each pair as input, you need to print number of unique pairs you currently have.

Complete the code in the editor to solve this problem.

//* Input Format

In the first line, there will be an integer T denoting number of pairs. Each of the next T lines will contain two strings seperated by a single space.

//* Output Format

Print T lines. In the i-th line, print number of unique pairs you have after taking i-th pair as input.

*/

package hackerRank.java;

import java.util.*;

public class hashSet {
  public static void main(String[] args) {
    // TASK
    Scanner s = new Scanner(System.in);
    int t = s.nextInt();
    String [] pair_left = new String[t];
    String [] pair_right = new String[t];
    
    for (int i = 0; i < t; i++) {
      pair_left[i] = s.next();
      pair_right[i] = s.next();
    }

    s.close();
    
    // FINISH TASK
    HashSet<String> pairs = new HashSet<String>(t);

    for(int i = 0; i < t; i++) {
      String pairsValue = "(" + pair_left[i] + ", " + pair_right[i] + ")";
      pairs.add(pairsValue);
      System.out.println(pairs.size());
    }
  }
}
