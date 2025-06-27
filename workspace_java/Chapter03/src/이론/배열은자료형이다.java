package 이론;

public class 배열은자료형이다 {
  public static void main(String[] args) {

    int a = 10;
    int[] arr1 = new int[3];
    //a = arr1;
    //arr1 = a;
    //둘다 자료형이 달라서 불가능

    String[] arr2 = new String[3];
    //arr1 = arr2;
    //arr2 = arr1;
    //둘다 배열이지만 정수를 저장하는 배열, 문자열을 저장하는 배열로 서로 달라서 불가능

    String[] arr3 = new String[10];
    arr3 = arr2;

  }
}
