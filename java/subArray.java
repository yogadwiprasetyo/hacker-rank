package hackerRank.java;

import java.util.Scanner;

public class subArray {
  public static void main(String[] args) {
    // INPUT STREAM
    Scanner sc = new Scanner(System.in);
    int n = sc.nextInt();
    int[] array= new int[n];
    for(int i = 0;i < n; i++){
      array[i] = sc.nextInt();
    }
    sc.close();
    
    // initial variable for total negative.
    int countNegativeSum=0;

    // loop all value in arrays
    for(int j = 0;j < n; j++){
      int sumSubArray = 0;

      for(int k = j; k < n; k++){
        // calculate subarrays
        sumSubArray = array[k] + sumSubArray;

        // if sum from subarray negative,
        // increment countNegativeSum.
        if (sumSubArray < 0) {
          countNegativeSum++;
        }
      }
    }

    // print the results
    System.out.println(countNegativeSum);
  }
}