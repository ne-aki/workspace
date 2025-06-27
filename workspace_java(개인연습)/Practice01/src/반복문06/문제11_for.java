package 반복문06;

import java.util.Scanner;

public class 문제11_for {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int num1, num2;
    System.out.print("첫번째 수 : ");
    num1 = sc.nextInt();
    System.out.print("두번째 수 : ");
    num2 = sc.nextInt();

    int max = num1 > num2 ? num1 : num2;
    int min = num1 > num2 ? num2 : num1;
    int cnt = 0;
    int sum = 0;
    for (int i = min + 1; i < max; i++) {
      sum += i;
    }
    System.out.println(num1 + "과 " + num2 + " 사이의 모든 정수의 합 : " + sum);
  }
}
