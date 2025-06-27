package 실습;

public class 문제_6_7_풀이 {
  public static void main(String[] args) {
    int i = 1;
    int cnt = 0;
    while (i < 101) {
      if (i % 5 == 0) {
        System.out.print(i + " ");
        cnt++;
      }
      i++;
    }
    System.out.println();
    System.out.println("5의 배수의 갯수 : " + cnt);
  }
}
