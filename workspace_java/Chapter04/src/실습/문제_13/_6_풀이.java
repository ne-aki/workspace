package 실습.문제_13;

public class _6_풀이 {
  public static void main(String[] args) {
    int[] arr = {10,1,2,3};
    int result1 = test6(arr);
    System.out.println(result1);
  }
  public static int test6(int[] arr) {
    int max = arr[0];
    for (int i = 0; i < arr.length; i++) {
      if (max < arr[i]) {
        max = arr[i];
      }
    }
    return max;
  }
}
