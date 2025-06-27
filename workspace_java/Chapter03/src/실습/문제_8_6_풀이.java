package 실습;

public class 문제_8_6_풀이 {
  public static void main(String[] args) {
    int[] arr = new int[10];

    for (int i = 0; i < arr.length; i++) {
      arr[i] = i + 1;
      System.out.println(arr[i]);
    }
    System.out.println(arr[9]);
  }
}
