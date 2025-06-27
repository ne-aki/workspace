package 실습;

import java.util.Scanner;

public class 문제_6_8 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    //입력받을 정수
    System.out.print("정수를 입력해 주세요 : ");
    int num = sc.nextInt();
    int cnt = 0;
    int i = 1;
    while (i < num + 1) {
      if (i % 2 == 0) {
        cnt++;
      }
      i++;
    }
    System.out.println("1부터 " + num + "까지의 짝수의 개수 : " + cnt);
  }
}
