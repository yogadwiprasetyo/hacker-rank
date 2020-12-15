/*

//* Task

You are given a phone book that consists of people's names and their phone number. After that you will be given some person's name as query. For each query, print the phone number of that person.

//* Input Format

The first line will have an integer  denoting the number of entries in the phone book. Each entry consists of two lines: a name and the corresponding phone number.

After these, there will be some queries. Each query will contain a person's name. Read the queries until end-of-file.

//* Output Format

For each case, print "Not found" if the person has no entry in the phone book. Otherwise, print the person's name and phone number. See sample output for the exact format.

To make the problem easier, we provided a portion of the code in the editor. You can either complete that code or write completely on your own.

*/

package hackerRank.java;

import java.util.*;

public class map {
  public static void main(String[] args) {
    Scanner in = new Scanner(System.in);
    int n = in.nextInt();

    // create map for name and number contact.
    Map<String, Integer> contact = new HashMap<>();
    in.nextLine();

    // insert name and number to map contact.
    for(int i = 0; i < n; i++) {
      String name = in.nextLine();
      int phone = in.nextInt();
      
      contact.put(name, phone);
      in.nextLine();
    }

    // print the number and contact in map.
    // if not in map, print not found.
    while(in.hasNext())
    {
      String nameKey = in.nextLine();
      try {
        int number = contact.get(nameKey);
        System.out.println(nameKey + "=" + number);
      } catch (Exception e) {
        System.out.println("Not Found");
      }
    }
    in.close();
  }
}
