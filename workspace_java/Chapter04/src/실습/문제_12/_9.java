package 실습.문제_12;

public class _9 {
  public static void main(String[] args) {
    int sum = oddSum(11);
    System.out.println(sum);
  }
  public static int oddSum(int num) {
    int sum = 0;
    for (int i = 1; i < num + 1; i++) {
      if (i % 2 == 1) {
        sum += i;
      }
    }
    return sum;
  }
}
