/*

//* Task

Given an array of n Player objects, write a comparator that sorts them in order of decreasing score; if 2 or more players have the same score, sort those players alphabetically by name.

//* Input Format

Input from stdin is handled by the locked stub code in the Solution class.

The first line contains an integer, n, denoting the number of players.
Each of the n subsequent lines contains a player's name and score, respectively.

//* Output Format

You are not responsible for printing any output to stdout. The locked stub code in Solution will create a Checker object, use it to sort the Player array, and print each sorted element.

*/


package hackerRank.java;

import java.util.*;

// FINISH TASK
class Checker implements Comparator<Player> {
    @Override
    public int compare (Player a, Player b) {
	boolean isScoreSame = b.score - a.score == 0;
	return (isScoreSame) ? a.name.compareTo(b.name) : b.score - a.score;
    }
}

// DEFAULT CODE
class Player{
    String name;
    int score;

    Player(String name, int score){
        this.name = name;
        this.score = score;
    }
}

public class comparator {
  public static void main(String[] args) {
	// DEFAULT CODE
        Scanner scan = new Scanner(System.in);
        int n = scan.nextInt();

	// DEFAULT CODE
        Player[] player = new Player[n];
        Checker checker = new Checker();

	// DEFAULT CODE
        for(int i = 0; i < n; i++){
            player[i] = new Player(scan.next(), scan.nextInt());
        }
        scan.close();

 	// DEFAULT CODE
        Arrays.sort(player, checker);
        for(int i = 0; i < player.length; i++){
            System.out.printf("%s %s\n", player[i].name, player[i].score);
        }
    }
}
