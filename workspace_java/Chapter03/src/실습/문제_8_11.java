package 실습;

public class 문제_8_11 {
  public static void main(String[] args) {
    int[] arr = {1,2,3,4,5,6,7,8};
    int evenCnt = 0;
    for (int i = 0; i < arr.length; i++) {
      if (arr[i] % 2 == 0) {
        evenCnt++;
      }
    }
    System.out.println(evenCnt);
  }
}
