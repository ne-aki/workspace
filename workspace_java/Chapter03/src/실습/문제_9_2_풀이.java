package 실습;

public class 문제_9_2_풀이 {
  public static void main(String[] args) {
    int[] arr = {5,4,3,2,1};
    int[] newArr = new int[5];

    //arr 배열의 값을 newArr에 복사
    for (int i = 0; i < newArr.length; i++) {
      newArr[i] = arr[i];
    }

    //arr 데이터 확인
    for (int e : newArr) {
      System.out.println(e);
    }
  }
}
