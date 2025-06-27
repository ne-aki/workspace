package 실습;

public class 문제_9_3 {
  public static void main(String[] args) {
    int[] arr1 = {1,2,3};
    int[] arr2 = {4,5,6};
    int[] newArr = new int[arr1.length + arr2.length];
    arr1 = arr2;
    arr2[0] = 10;
    System.out.println(arr1[1]);
    System.out.println(arr2[2]);
    for (int i = 0; i < newArr.length; i++) {
      newArr[i] = arr1[2];
      newArr[i] = arr2[2];
      System.out.println(newArr[i]);
    }
  }
}
