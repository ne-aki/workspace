package 배열09;

import java.util.Scanner;

public class 문제1 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int length = sc.nextInt();
    int[] arr = new int[length];
    for (int i = 0; i < arr.length; i++) {
      arr[i] = i + 1;
    }
    int sum = 0;
    for (int e : arr) {
      sum += e;
    }
    System.out.println((double) sum / arr.length);
  }
}
