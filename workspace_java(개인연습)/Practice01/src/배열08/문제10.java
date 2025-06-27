package 배열08;

import java.util.Scanner;

public class 문제10 {
  public static void main(String[] args) {
    int[] arr = new int[5];
    Scanner sc = new Scanner(System.in);
    for (int i = 0; i < arr.length; i++) {
      System.out.print("수 입력 : ");
      arr[i] = sc.nextInt();
    }
    for (int e : arr) {
      System.out.println(e);
    }
  }
}
