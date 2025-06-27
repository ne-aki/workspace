package 반복문06;

public class 문제13_while {
  public static void main(String[] args) {
    int sum = 0;
    int i = 1;
    while (true) {
      sum += i;
      ++i;

      if (sum > 300) {
        break;
      }
    }
    System.out.println(sum);
    System.out.println(i);
  }
}
