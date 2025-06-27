package 실습.문제_12;

import java.util.Scanner;

public class _2 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int a = sc.nextInt();
    int b = sc.nextInt();
    int multiply = getMultiply(a,b);
    System.out.println(multiply);
  }
  public static int getMultiply(int num1, int num2) {
    return num1 * num2;
  }
}
