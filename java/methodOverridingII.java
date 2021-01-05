/*

//* Task

When a method in a subclass overrides a method in superclass, it is still possible to call the overridden method using super keyword. If you write super.func() to call the function func(), it will call the method that was defined in the superclass.

//* Output Format

Hello I am a motorcycle, I am a cycle with an engine.
My ancestor is a cycle who is a vehicle with pedals.

*/

package hackerRank.java;

// DEFAULT CODE
class BiCycle{
  String define_me(){
    return "a vehicle with pedals.";
  }
}

// DEFAULT CODE
class MotorCycle extends BiCycle{
  // DEFAULT CODE
  String define_me(){
    return "a cycle with an engine.";
  }
  
  // FINISH TASK
  MotorCycle(){
    System.out.println("Hello I am a motorcycle, I am "+ define_me());
    String temp = super.define_me();
    System.out.println("My ancestor is a cycle who is "+ temp );
  }
}

public class methodOverridingII {
  public static void main(String[] args) {
    MotorCycle M = new MotorCycle();
  }
}
