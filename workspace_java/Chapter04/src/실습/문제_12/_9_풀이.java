package 실습.문제_12;

public class _9_풀이 {
  public static void main(String[] args) {
    System.out.println(test9(11));
  }
  public static int test9(int num) {
    int sum = 0;
    for (int i = 1; i < num + 1; i++) {
      if (i % 2 == 1) {
        sum += i;
      }
    }
    return sum;
  }
}
