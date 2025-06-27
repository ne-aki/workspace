package 실습.문제11;

import java.util.Scanner;

public class 문제_11_9 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    System.out.print("첫 번재 수 : ");
    int a = sc.nextInt();
    System.out.print("두 번째 수 : ");
    int b = sc.nextInt();
    test9(a,b);
  }
  public static void test9(int num1, int num2) {
    System.out.print("두 수의 합 : " + (num1 + num2));
  }
}
