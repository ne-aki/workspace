package 실습.문제_13;

import java.util.Arrays;

public class _8_풀이 {
  public static void main(String[] args) {
    int[] arr1 = {1,2,3};
    int[] arr2 = {2,3,4};
    int[] result = test8(arr1,arr2);
    //배열을 바로 출력해주는 메소드
    System.out.println(Arrays.toString(result));
  }
  public static int[] test8(int[] arr1, int[] arr2) {
    int[] resultArr = new int[arr1.length + arr2.length];
    for (int i = 0; i < arr1.length; i++) {
      resultArr[i] = arr1[i];
    }
    for (int i = 0; i < arr2.length; i++) {
      resultArr[i + arr1.length] = arr2[i];
    }
    return resultArr;
  }
}
