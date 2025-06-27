public class AccTest {
  public static void main(String[] args) {
    //초기화
    //  모든 다른 기능보다 먼저 실행되어야 함
    //  초기화는 최초 1회만 실행되어야 한다.
    Account acc1 = new Account();
    acc1.printAcc();

    Account acc2 = new Account(1000);
    acc2.printAcc();

    Account acc3 = new Account("123-23",32849378,"이근형");
    acc3.printAcc();

    //계좌정보 초기화
    //acc.initAcc("123-45",1243125123,"이근형");
    //acc.printAcc();
  }
}
