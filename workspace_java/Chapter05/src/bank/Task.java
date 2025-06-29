package bank;

import java.util.Scanner;

public class Task {
  private Scanner sc;
  AccountInfo acc;
  ClientInfo[] clients;
  int cnt; //등록된 고객 수
  public Task() {
    sc = new Scanner(System.in);
    acc = new AccountInfo(10000);
    clients = new ClientInfo[5];
    cnt = 0;
  }
  //계좌개설
  public void openAcc() {
    System.out.println("계좌개설을 시작합니다.");
    System.out.print("이름 : ");

  }
  //입금
  public void deposit() {

    int amount = sc.nextInt();
    acc.setDeposits(amount);
  }
  //출금
  //예금조회
  //계좌해지
  //고객정보, 계좌정보 출력
}
