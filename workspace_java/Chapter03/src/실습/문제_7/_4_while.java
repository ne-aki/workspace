package 실습.문제_7;

public class _4_while {
  public static void main(String[] args) {
    int i = 1;
    int sum = 0;
    while (true) {
      sum += i;
      i++;
      if (sum > 50) {
        break;
      }
    }
    System.out.println(i - 1);
    System.out.println(sum);
  }
}
