package 반복문06;

import java.util.Scanner;

public class 문제11_while {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    //정수1, 2 변수 저장
    int num1, num2;
    System.out.print("첫번째 수 : ");
    num1 = sc.nextInt();
    System.out.print("두번째 수 : ");
    num2 = sc.nextInt();
    //최대값, 최소값 지정
    int max = num1 > num2 ? num1 : num2;
    int min = num1 > num2 ? num2 : num1;

    //합을 저장할 변수
    int sum = 0;
    int i = min + 1;
    while (i < max) {
      sum += i;
      ++i;
    }
    System.out.println(sum);
  }
}
