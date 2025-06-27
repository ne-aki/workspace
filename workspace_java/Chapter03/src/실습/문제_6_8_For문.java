package 실습;

import java.util.Scanner;

public class 문제_6_8_For문 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int cnt = 0;
    for (int i = 1; i <= sc.nextInt(); ++i) {
      if (i % 2 == 0) {
        cnt++;
      }
      i++;
    }
    System.out.println(cnt);
  }
}
