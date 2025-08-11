package 복습;

import java.util.Scanner;

public class Test3 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int clapCnt = 0;
    System.out.print("수 입력 : ");
    int num = sc.nextInt();
    if (num / 100 == 3) {
      clapCnt++;
    }
    if (num / 10 % 10 == 3) {
      clapCnt++;
    }
    if (num % 10 == 3) {
      clapCnt++;
    }
    switch (clapCnt) {
      case 0 :
        System.out.println("박수 0번");
        break;
      case 1 :
        System.out.println("박수 1번");
        break;
      case 2 :
        System.out.println("박수 2번");
        break;
      case 3 :
        System.out.println("박수 3번");
    }
  }
}
