package 실습;

public class 문제_9_3_풀이 {
  public static void main(String[] args) {
    int[] arr1 = {1,2,3};
    int[] arr2 = {4,5,6};
    int[] newArr = new int[arr1.length + arr2.length];

    //arr1 배열의 크기(길이)만큼 반복해서 newArr에 데이터를 저장
    for (int i = 0; i < arr1.length; i++) {
      newArr[i] = arr1[i];
    }

    //arr2 배열의 크기만큼 반복해서 newArr에 데이터를 저장
    for (int i = 0; i < arr2.length; i++) {
      newArr[i + arr1.length] = arr2[i];
    }

    //newArr 데이터 확인
    for (int e : newArr) {
      System.out.print(e + " ");
    }

  }
}
