package 배열09;

public class 문제2 {
  public static void main(String[] args) {
    int[] arr = {5,4,3,2,1};
    int[] newArr = new int[5];
    for (int i = 0; i < newArr.length; i++) {
      newArr = arr;
    }
    arr[1] = 7;
    System.out.println(newArr[1]);
  }
}
