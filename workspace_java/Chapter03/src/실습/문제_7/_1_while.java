package 실습.문제_7;

public class _1_while {
  public static void main(String[] args) {
    int i = 1;
    while (i < 11) {
      if (i % 2 == 0) {
        i++;
        continue;
      }
      System.out.println(i);
      i++;
    }
  }
}
