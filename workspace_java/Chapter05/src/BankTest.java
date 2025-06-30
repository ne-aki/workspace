public class BankTest {
  public static void main(String[] args) {
    Bank b1 = new Bank("Kim");
    Bank b2 = new Bank("Lee");
    Bank b3 = new Bank("Tanaka");
    Bank b4 = new Bank("Choi");
    Bank b5 = new Bank("Sato");

    System.out.println(b1.이율);
    System.out.println(b2.이율);
    Bank.이율 = 8.0;
    System.out.println(b1.이율);
    System.out.println(b2.이율);

    print();
  }

  public static void print() {
    System.out.println(123);
  }
}
