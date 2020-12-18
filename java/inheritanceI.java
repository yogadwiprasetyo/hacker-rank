/*

//* Task

The code above is provided for you in your editor. You must add a sing method to the Bird class, then modify the main method accordingly so that the code prints the following lines:

I am walking
I am flying
I am singing

*/

package hackerRank.java;

// INPUT
class Animal{
  void walk()
  {
    System.out.println("I am walking");
  }
}

// INPUT
class Bird extends Animal
{
  void fly()
  {
    System.out.println("I am flying");
  }
  
  // FINISH TASK
  void sing()
  {
    System.out.println("I am singing");
  }
}

public class inheritanceI {
  public static void main(String[] args) {
    // FINISH TASK (OUTPUT)
    Bird bird = new Bird();
    bird.walk();
    bird.fly();
    bird.sing();
  }
}
