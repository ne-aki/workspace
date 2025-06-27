package 배열08;

public class 문제9_for {
  public static void main(String[] args) {
    int[] arr = {1,5,7};
    int sum = 0;
    for (int i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    System.out.println(sum);
  }
}
