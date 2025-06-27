package 실습;

import java.util.Scanner;

public class 문제_6_11_while {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int num1, num2;
    System.out.print("첫번째 수 : ");
    num1 = sc.nextInt();
    System.out.print("두번째 수 : ");
    num2 = sc.nextInt();

    //입력받은 두 수에서 큰 수와 작은 수를 구분
    int max = num1 > num2 ? /*num1이 num2보다 크니?*/num1 : num2; //num1이 큰 수면 참 : num2가 큰 수면 거짓
    int min = num1 > num2 ? num2 : num1;

    int sum = 0;
    //min : 1, max : 5라고 가정
    int i = min + 1;
    while (i < max) {
      sum += i;
      i++;
    }
    System.out.println(sum);

  }
}
