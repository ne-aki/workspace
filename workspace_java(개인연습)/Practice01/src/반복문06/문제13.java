package 반복문06;

public class 문제13 {
  public static void main(String[] args) {
    int i = 1;
    int sum = 0;

    while (i < 100) {
      sum += i;

      if (sum > 300) {
        System.out.println(sum);
        System.out.println(i);
        break;
      }

      i++;
    }
  }
}
