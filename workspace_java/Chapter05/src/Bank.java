public class Bank {
  int money; //예금액
  String owner; //소유주
  static double 이율; //이율

  static {
    이율 = 5.0;
  }

  public Bank(String owner){
    money = 10000;
    this.owner = owner;
  }

  //static이 붙으면 이 메소드를 먼저 해석하기 때문에 오류가 생김
  public static void aaa() {
    System.out.println(123);

  }

  public void bbb() {
    System.out.println("aaa");
  }
}
