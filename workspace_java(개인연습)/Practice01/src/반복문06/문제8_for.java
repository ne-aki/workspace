package 반복문06;

import java.util.Scanner;

public class 문제8_for {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    System.out.print("정수 입력 : ");
    //입력받은 수를 저장할 변수
    int num = sc.nextInt();
    //개수를 저장할 변수
    int cnt = 0;
    for (int i = 1; i < num + 1; i++) {
      //짝수라면 개수 1증가
      if (i % 2 == 0) {
        cnt++;
      }
    }
    System.out.println("1부터 " + num + "까지 짝수의 개수는 " + cnt + "개입니다.");
  }
}
