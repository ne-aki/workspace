package 실습.문제11;

public class 문제_11_13 {
  public static void main(String[] args) {
    between(5,1);
  }
  public static void between(int num1, int num2) {
    int max, min;
    max = num1 > num2 ? num1 : num2;
    min = num1 > num2 ? num2 : num1;
    for (int i = min + 1; i < max; i++) {
      System.out.println(i);
    }
  }
}
