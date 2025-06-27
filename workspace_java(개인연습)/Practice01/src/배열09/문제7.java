package 배열09;

public class 문제7 {
  public static void main(String[] args) {
    int[] arr = new int[10];
    for (int i = 0; i < arr.length; i++) {
      //1~100사이의 정수
      arr[i] = (int) (Math.random() * 100 + 1);
      System.out.print(arr[i] + " ");
    }
    int max = arr[0];
    int min = arr[0];
    for (int e : arr) {
      if (max > e) {
        max = e;
      }
      if (min < e) {
        min = e;
      }
    }

    System.out.println(arr[0]);
    System.out.println("最大値：" + max);
    System.out.println("最小値：" + min);
  }
}
