package 실습;

public class 문제_9_7_풀이 {
  public static void main(String[] args) {
    int[] arr = new int[10];

    //배열의 크기만큼 1~100사이의 랜덤한 정수를 반복해서 저장
    for (int i = 0; i < arr.length; i++) {
      //0.0 <= x < 1.0 랜덤 실수 변환
//      int num = (int) (Math.random() * 100 + 1);
//      arr[i] = num;
      arr[i] = (int) (Math.random() * 100 + 1);
    }
    //랜덤 데이터 저장 확인
    for (int e : arr) {
      System.out.print(e + " ");
    }
    System.out.println();

    //배열의 가장 큰 값을 저장할 변수
    int max = arr[0];
    //배열의 가장 작은 값을 저장할 변수
    int min = arr[0];

    //max, min값 구하기
    for (int i = 0; i < arr.length; i++) {
      if (max < arr[i]) {
        max = arr[i];
      }
      if (min > arr[i]) {
        min = arr[i];
      }
    }
    System.out.println("최대값 : " + max);
    System.out.println("최소값 : " + min);
  }
}
