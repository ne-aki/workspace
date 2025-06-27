
//좋은 클래스의 조건
//  모든 멤버 변수는 초기값을 갖는 것이 좋다!
//  멤버변수 선언시에는 초기값을 저장하지 않는 것이 좋다!
public class Account {
  String accNum; //계좌번호
  int money; //예금액
  String owner; //소유주

  //생성자(Constructor)
  //멤버변수의 값을 초기화하는 역할
  //생성자는 리턴타입이 없다.
  //생성자 이름은 반드시 클래스명과 동일!
  //클래스에 생성자가 하나도 없으면, 내용이 없는 생성자를 자동으로 만들어줌
  //매개변수 정보(매개변수의 자료형, 매개변수의 개수)를 다르게 지정하면 생성자를 여러개 생성할 수 있음!
  public Account() {
  }
  public Account(String a) {
  }
  public Account(int money) {
    accNum = "";
    this.money = money;
    owner = "";
  }
  //메소드 오버로딩(Method Over-loading)
  //메소드명은 중복이 불가하지만,
  //메소드의 매개변수의 개수, 매개변수의 자료형이 다르면
  //메소드명을 중복 선언하는 것을 허용한다.
  public void test() {

  }
  public void test(int a) {

  }
  public void test(String a) {

  }

  public Account(String accNum,int money,String owner) {
    this.accNum = accNum;
    this.money = money;
    this.owner = owner;
  }

  //모든 멤버변수의 값을 초기화시켜주는 메소드
  public void initAcc(String accNum, int money, String owner) {
    this.accNum = accNum;
    this.money = money;
    this.owner = owner;
  }
  //모든 멤버변수의 값을 출력하는 메소드
  public void printAcc() {
    System.out.println("계좌번호 : " + accNum);
    System.out.println("예금액 : " + money);
    System.out.println("소유주 : " + owner);
  }
}
