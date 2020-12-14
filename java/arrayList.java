/*

//* Task

Sometimes it's better to use dynamic size arrays. Java's Arraylist can provide you this feature. Try to solve this problem using Arraylist.

You are given n lines. In each line there are zero or more integers. You need to answer a few queries where you need to tell the number located in y-th position of x-th line.

Take your input from System.in.

//* Input Format

The first line has an integer n. In each of the next n lines there will be an integer d denoting number of integers on that line and then there will be d space-separated integers. In the next line there will be an integer q denoting number of queries. Each query will consist of two integers x and y.

//* Output Format

In each line, output the number located in y-th position of x-th line. If there is no such position, just print "ERROR!"

*/

package hackerRank.java;

import java.util.*;

public class arrayList {
  public static void main(String[] args) {
    Scanner scan = new Scanner(System.in);
    int totalList = scan.nextInt();
    ArrayList<ArrayList<Integer>> aList = new ArrayList<>();
    
    // INPUT ARRAY LIST
    for (int i = 0; i < totalList; i++) {
      aList.add(new ArrayList<>());
      int lengthList = scan.nextInt();
      
      for (int j = 0; j < lengthList; j++) {
        aList.get(i).add(scan.nextInt());
      }
    }
    
    // INPUT QUERIES 
    int totalQueries = scan.nextInt();
    for (int k = 0; k < totalQueries; k++) {
      try {
        int row = scan.nextInt();
        int column = scan.nextInt();

        System.out.println(aList.get((row - 1)).get((column - 1)));
      }
      catch(Exception e) {
        System.out.println("ERROR!");
      }
    }

    scan.close();
  }
}