package 반복문심화07;

public class 문제1_while {
  public static void main(String[] args) {
    int i = 1;
    while (i < 11) {
      if (i % 2 == 0) {
        continue;
      }
      System.out.println(i);
      ++i;
    }
  }
}
