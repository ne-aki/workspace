package list_실습_22;

import java.util.Scanner;

public class BankTask {
  Scanner sc;

  public BankTask() {
    sc = new Scanner(System.in);
  }
  //계좌개설
  public void openAccount() {
    System.out.println("계좌개설을 시작합니다.");
    System.out.print("이름 : ");
    String name = sc.next();
    System.out.print("주민등록번호 : ");
    String birth = sc.next();

  }
  //입금

  //출금

  //예금조회

  //계좌해지

  //전체정보(고객정보, 계좌정보)
}
