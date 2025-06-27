package if_statement;

import java.util.Scanner;

public class compare {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int num1, num2;
    num1 = sc.nextInt();
    num2 = sc.nextInt();
    if (num1 > num2) {
      System.out.println(">");
    } else if (num1 < num2) {
      System.out.println("<");
    } else {
      System.out.println("==");
    }
  }
}
