package 실습;

import java.awt.*;
import java.util.Scanner;

public class 문제_9_1 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int[] arr = new int[sc.nextInt()];
    int cnt = 0;
    int sum = 0;
    for (int i = 0; i < arr.length; i++) {
      sum += i + 1;
      ++cnt;
    }
    System.out.println(sum);
    System.out.println(cnt);
    System.out.println((double) sum / cnt);
  }
}
