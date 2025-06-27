package 실습;

public class 문제_6_7 {
  public static void main(String[] args) {
    int i = 1;
    int cnt = 0;
    while (i < 101) {
      if (i % 5 == 0) {
        System.out.println(i);
        cnt++;
      }
      ++i;
    }
    System.out.println("5의 배수 개수 : " + cnt);
  }
}
