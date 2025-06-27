package 실습.문제_7;

public class _3_while {
  public static void main(String[] args) {
    int i = 1;
    int sum = 0;
    while (i < 21) {
      if (i % 3 == 0) {
        i++;
        continue;
      }
      sum += i;
      i++;
    }
    System.out.println(sum);
  }
}
