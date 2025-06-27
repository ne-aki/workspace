package 실습.문제11;

public class 문제_11_14 {
  public static void main(String[] args) {
    test14(3,82);
  }
  public static void test14(int num1, int num2) {
    int max, min;
    max = Math.max(num1, num2);
    min = Math.min(num1, num2);
    int cnt = 0;
    for (int i = min + 1; i < max; i++) {
      if (i % 5 == 0) {
        cnt++;
      }
    }
    System.out.println(cnt);
  }
}
