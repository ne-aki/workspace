package 실습;

import java.util.Scanner;

public class 문제_6_11_for {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int num1, num2;
    int max, min;
    System.out.print("정수 1 : ");
    num1 = sc.nextInt();
    System.out.print("정수 2 : ");
    num2 = sc.nextInt();
    max = num1 > num2 ? num1 : num2;
    min = num1 > num2 ? num2 : num1;
    for (int i = min + 1; i < max; i++) {

    }
  }
}
