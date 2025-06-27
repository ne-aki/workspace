package 반복문06;

public class 문제5_while {
  public static void main(String[] args) {
    int i = 0;
    int sum = 0;
    while (i < 11) {
      sum += i;
      ++i;
    }
    System.out.println(sum);
  }
}
