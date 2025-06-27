package 반복문06;

import java.util.Scanner;

public class 문제8_while {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int i = 1;
    System.out.print("정수 입력 : ");
    int num = sc.nextInt();
    int cnt = 0;
    while (i < num + 1) {
      if (i % 2 == 0) {
        cnt++;
      }
      ++i;
    }
    System.out.println("1부터 " + num +"까지 짝수의 개수는 " + cnt + "개입니다.");
  }
}
