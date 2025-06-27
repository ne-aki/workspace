package 배열08;

public class 문제9_forEach {
  public static void main(String[] args) {
    int[] arr = {1,5,7};
    int sum = 0;
    for (int e : arr) {
      sum += e;
    }
    System.out.println(sum);
  }
}
