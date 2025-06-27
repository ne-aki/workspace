package 실습;

import java.util.Scanner;

public class 문제_9_1_풀이 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    System.out.print("배열의 길이를 입력하세요 : ");
    int length = sc.nextInt();

    int[] arr = new int[length];
    for (int i = 0; i < arr.length; i++) {
      arr[i] = i + 1;
    }
    //배열의 모든 요소의 합
    int sum = 0;
    for (int i = 0; i < arr.length; i++) {
      sum += arr[i];
    }

    //평균
    double avg = (double) sum / arr.length;
    System.out.println(avg);
  }
}
