package 실습;

import java.util.Scanner;

public class 문제_6_8_풀이 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    System.out.print("정수 입력 : ");
    int num = sc.nextInt(); //num이 5라고 가정...
    int cnt = 0; //짝수의 개수
    for (int i = 1; i < num + 1; i++) {
      if (i % 2 == 0) {
        cnt++;
      }
    }
    System.out.println("1과 " + num + " 사이의 짝수의 개수는 " + cnt + "개입니다.");
  }
}
