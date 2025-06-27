package 실습.문제_7;

public class _3_for {
  public static void main(String[] args) {
    int sum = 0;
    for (int i = 1; i < 21; i++) {
      if (i % 3 == 0) {
        continue;
      }
      sum += i;
    }
    System.out.println(sum);
  }
}
