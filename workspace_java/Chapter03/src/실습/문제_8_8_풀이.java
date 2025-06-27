package 실습;

public class 문제_8_8_풀이 {
  public static void main(String[] args) {
    int[] arr = new int[10];

    //배열의 각 요소에 1~10까지 데이터를 저장
    for (int i = 0; i < arr.length; i++) {
      arr[i] = i + 1;
    }

    //배열의 각 요소를 출력
    for (int i = 0; i < arr.length; i++) {
      System.out.println(arr[i]);
    }

  }
}
