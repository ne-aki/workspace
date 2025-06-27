package 실습.문제_13;

import java.util.Arrays;

public class _9_풀이 {
  public static void main(String[] args) {
    int[] arr = {3,245,4556,21,3,5,2,34,2};
    int[] result = test9(arr);
    System.out.println(Arrays.toString(result));
  }
  public static int[] test9(int[] arr) {
    //매개변수로 들어온 배열의 짝수의 개수를 구함
    int evenCnt = 0;
    for (int i = 0; i < arr.length; i++) {
      if (arr[i] % 2 == 0) {
        evenCnt++;
      }
    }
    int[] resultArr = new int[evenCnt];
    //짝수의 개수만큼의 공간을 갖는 배열을 생성
    int[] result = new int[evenCnt];
    //새로 생성한 배열에 매개변수로 들어온 배열 요소 중 짝수만 저장한다.
    int index = 0;
    for (int i = 0; i < arr.length; i++) {
      if (arr[i] % 2 == 0) {
//        resultArr[index] = arr[i];
//        index++;
        //++index는 바로 증가해서 0번째 값이 아닌, 1번째 값부터 들어가기 때문에 쓸 수 없다
        resultArr[index++] = arr[i];
      }
    }
    //배열을 리턴한다.
    return resultArr;
  }
}
