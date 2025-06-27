package 실습;

public class 문제_6_7_For문 {
  public static void main(String[] args) {
    int cnt = 0;
    for (int i = 1; i < 101; i++) {
      if (i % 5 == 0) {
        cnt++;
        System.out.println(i);
      }
    }
    System.out.println(cnt);
  }
}
