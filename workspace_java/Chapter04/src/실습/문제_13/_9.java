package 실습.문제_13;

public class _9 {
  public static void main(String[] args) {
    int[] arr = {1,2,3,4,5};
    int[] result = test9(arr);
    for (int i = 0; i < arr.length; i++) {
      System.out.println(result[i]);
    }
  }
  public static int[] test9(int[] arr) {
    for (int i = 0; i < arr.length; i++) {
      if (arr[i] % 2 == 1) {
        continue;
      }
      return arr;
    }
    return arr;
  }
}
