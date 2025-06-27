package bank;

import java.util.Scanner;

public class BankTest {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    boolean isRunning = true;
    while (isRunning) {
      System.out.print("1. 계좌개설  2. 입금  3. 출금   4. 예금조회  5. 전체조회  6. 은행업무종료 => ");
      int inputNum = sc.nextInt();
      switch (inputNum) {
        case 1:
          break;
        case 2:
          break;
        case 3:
          break;
        case 4:
          break;
        case 5:
          break;
        case 6:
          System.out.println("은행업무를 종료합니다.");
          isRunning = false;
          break;
        default:
          System.out.println("1~6사이의 숫자 입력");
      }
    }
  }
}
