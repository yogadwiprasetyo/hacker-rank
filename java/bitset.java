/*

//* Task

Given 2 BitSets, B1 and B2, of size N where all bits in both BitSets are initialized to 0, perform a series of M operations. After each operation, print the number of set bits in the respective BitSets as two space-separated integers on a new line.

//* Input Format

The first line contains 2 space-separated integers, N (the length of both BitSets B1 and B2) and M (the number of operations to perform), respectively.

//* Output Format

After each operation, print the respective number of set bits in BitSet B1 and BitSet B2 as 2 space-separated integers on a new line.

*/

package hackerRank.java;

import java.util.*;

public class bitset {
  public static void main(String[] args) {
    Scanner scan = new Scanner(System.in);
    int lengthBitset = scan.nextInt();
    int lengthQueries = scan.nextInt();

    // initiate object bitset 1 and 2.
    BitSet bitSet1 = new BitSet();
    BitSet bitSet2 = new BitSet();

    for (int i = 0; i < lengthQueries; i++) {
      String query = scan.next();
      int set1 = scan.nextInt();
      int index = scan.nextInt();

      // execute query corresponding command.
      switch (query) {
        case "AND":
          if (set1 != 1) {
            bitSet2.and(bitSet1);
          } else {
            bitSet1.and(bitSet2);
          }
          printValueBit(bitSet1, bitSet2);
          break;
        case "OR":
          if (set1 != 1) {
            bitSet2.or(bitSet1);
          } else {
            bitSet1.or(bitSet2);
          }
          printValueBit(bitSet1, bitSet2);
          break;
        case "XOR":
          if (set1 != 1) {
            bitSet2.xor(bitSet1);
          } else {
            bitSet1.xor(bitSet2);
          }
          printValueBit(bitSet1, bitSet2);
          break;
        case "FLIP":
          if (set1 != 1) {
            bitSet2.flip(index);
          } else {
            bitSet1.flip(index);
          }
          printValueBit(bitSet1, bitSet2);
          break;
        case "SET":
          if (set1 != 1) {
            bitSet2.set(index);
          } else {
            bitSet1.set(index);
          }
          printValueBit(bitSet1, bitSet2);
          break;
      }
    }

    scan.close();
  }

  // print value in bitset 1 and bitset 2
  private static void printValueBit (BitSet bs1, BitSet bs2) {
    int totalB1 = totalBit(bs1);
    int totalB2 = totalBit(bs2);
    System.out.println(totalB1 + " " + totalB2);
  }

  // calculate value bit in bitset 
  private static int totalBit (BitSet bs) {
    int total = 0;
    for (int j = 0; j < bs.length(); j++) {
      int value = bs.get(j) ? 1 : 0;
      total += value;
    }
    return total;
  }
}
