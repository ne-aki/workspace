package bank;

public class AccountInfo {
  private String accountNum;
  private int deposits; //예금액

  public AccountInfo(int deposits) {
    this.deposits = deposits;
  }

  public void setDeposits(int deposits) {
    this.deposits = deposits;
  }

  public void printAccount() {
    System.out.println("계좌번호 : " + accountNum);
  }
}
