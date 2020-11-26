/*

//* Task

Given a double-precision number, payment, denoting an amount of money, use the NumberFormat class' getCurrencyInstance method to convert payment into the US, Indian, Chinese, and French currency formats. Then print the formatted values as follows:

US: formattedPayment
India: formattedPayment
China: formattedPayment
France: formattedPayment
where formattedPayment is payment formatted according to the appropriate Locale's currency.

//* Input Format

A single double-precision number denoting payment.

//* Output Format

On the first line, print US: u where u is payment formatted for US currency.
On the second line, print India: i where i is payment formatted for Indian currency.
On the third line, print China: c where c is payment formatted for Chinese currency.
On the fourth line, print France: f, where f is payment formatted for French currency.

*/

package hackerRank.java;

import java.util.Locale;
import java.util.Scanner;
import java.text.NumberFormat;

public class currencyFormatter {
  public static void main(String[] args) {
    
    // initial object I/O stream.
    Scanner scanner = new Scanner(System.in);
    double payment = scanner.nextDouble();
    scanner.close();

    // initial new locale indian
    Locale locale_in = new Locale("en", "IN");

    // Write your code here.
    NumberFormat nff = localeCurrency(Locale.FRANCE);
    NumberFormat nfc = localeCurrency(Locale.CHINA);
    NumberFormat nfu = localeCurrency(Locale.US);
    NumberFormat nfi = localeCurrency(locale_in);
    
    // format number to currency.
    String us = nfu.format(payment);
    String china = nfc.format(payment);
    String france = nff.format(payment);
    String india = nfi.format(payment);

    System.out.println("US: " + us);
    System.out.println("India: " + india);
    System.out.println("China: " + china);
    System.out.println("France: " + france);
  }

  private static NumberFormat localeCurrency(Locale locale) {
    NumberFormat nFormatCurrency = NumberFormat.getCurrencyInstance(locale);
    return nFormatCurrency;
  }
}