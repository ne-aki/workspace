package 실습.문제11;

public class 문제_11_11 {
  public static void main(String[] args) {
    test11(1,1);
    test11(1,2);
    test11(2,1);
    test11(2,2);
  }
  public static void test11(int num1, int num2) {
    if (num1 % 2 == 0 && num2 % 2 == 0) {
      System.out.println("두 수는 짝수입니다.");
    } else if (num1 % 2 == 0 || num2 % 2 == 0) {
      System.out.println("한 수만 짝수입니다.");
    } else {
      System.out.println("두 수는 홀수입니다.");
    }
  }
}
