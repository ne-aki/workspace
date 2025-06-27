package 실습;

import java.lang.reflect.Array;

public class 문제_9_6 {
  public static void main(String[] args) {
    int[] array = {1,5,3,8,2};
    int max = array[0];

    //작성 위치
    //배열의 크기만큼 반복한다.
    //반복하면서 max의 값과 배열의 각 요소의 값의 크기를 비교
    //배열의 각 요소의 값이 max보다 크다면 배열 요소의 값을 max에 저장한다.
    for (int i = 0; i < array.length; i++) {
      if (max < array[i]) {
        max = array[i];
      }
    }

    System.out.println("max: " + max);
  }
}
