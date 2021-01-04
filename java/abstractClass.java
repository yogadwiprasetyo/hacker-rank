/*

//* Task

You have to create another class that extends the abstract class. Then you can create an instance of the new class.

Notice that setTitle method is abstract too and has no body. That means you must implement the body of that method in the child class.

*/

package hackerRank.java;

import java.util.Scanner;

abstract class Book{
  String title;
  abstract void setTitle(String s);
  String getTitle(){
    return title;
  }
}

// FINISH TASK
// Write MyBook class here
class MyBook extends Book {
  @Override
  void setTitle (String s) {
    this.title = s;
  }
}

public class abstractClass {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    String title = sc.nextLine();
    MyBook new_novel = new MyBook();
    new_novel.setTitle(title);
    System.out.println("The title is: " + new_novel.getTitle());
    sc.close();
  }
}
