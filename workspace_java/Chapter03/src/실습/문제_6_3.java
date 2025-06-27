package 실습;

public class 문제_6_3 {
  public static void main(String[] args) {
    int i = 2;
    while (i < 11) {
      System.out.print(i + " ");
      i += 2;
    }
  }

  public static class 문제_6_6_For문 {
    public static void main(String[] args) {

      int cnt = 0; //3의 배수의 개수
      for (int i = 1; i < 101; i++) {
        if (i % 3 == 0) {
          cnt++;
        }
      }
      System.out.println(cnt);
    }
  }
}
