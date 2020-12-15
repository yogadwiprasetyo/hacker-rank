/*

//* Task

Given a list, L, of N integers, perform Q queries on the list. Once all queries are completed, print the modified list as a single line of space-separated integers.

//* Input Format

The first line contains an integer, N (the initial number of elements in L).
The second line contains N space-separated integers describing L.
The third line contains an integer, Q (the number of queries).
The 2Q subsequent lines describe the queries, and each query is described over two lines:

If the first line of a query contains the String Insert, then the second line contains two space separated integers x y, and the value y must be inserted into L at index x.
If the first line of a query contains the String Delete, then the second line contains index x, whose element must be deleted from L.

//* Output Format

Print the updated list L as a single line of space-separated integers.

*/

package hackerRank.java;

import java.util.*;

public class list {
  public static void main(String[] args) {
    Scanner scan = new Scanner(System.in);

    // input length list.
    int lengthList = scan.nextInt();

    // create list.
    List<Integer> list = new ArrayList<>();
    
    // insert element to list.
    for (int i = 0; i < lengthList; i++) {
      int element = scan.nextInt();
      list.add(element);
    }
    
    // total queries for executing.
    int totalQueries = scan.nextInt();
    
    for (int j = 0; j < totalQueries; j++) {
      String nameQueries = scan.next();

      // EXECUTE QUERIES INSERT
      if (nameQueries.equals("Insert")) {
        int indexInsert = scan.nextInt();
        int element = scan.nextInt();
        list.add(indexInsert, element);
      } else { // EXECUTE QUERIES DELETE
        int indexDelete = scan.nextInt();
        list.remove(indexDelete);
      }
    }

    scan.close();

    // print element list.
    list.forEach((value) -> System.out.print(value + " "));
  }
}