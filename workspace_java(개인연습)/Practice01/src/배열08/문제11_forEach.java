package 배열08;

public class 문제11_forEach {
  public static void main(String[] args) {
    int[] arr = {1,2,3,4,5,6,7,8};
    int cnt = 0;
    for (int e : arr) {
      if (e % 2 == 0) {
        cnt++;
      }
    }
    System.out.println(cnt);
  }
}
