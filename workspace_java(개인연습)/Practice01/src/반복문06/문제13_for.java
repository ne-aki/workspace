package 반복문06;

public class 문제13_for {
  public static void main(String[] args) {
    int sum = 0;
    int num = 1;
    for (;;) {
      sum += num;
      if (num > 300) {
        break;
      }
    }
    System.out.println(sum);
  }
}
