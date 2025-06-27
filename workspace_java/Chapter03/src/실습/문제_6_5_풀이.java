package 실습;

public class 문제_6_5_풀이 {
  public static void main(String[] args) {
    // 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10
    //1 ~ 10까지의 합을 저장할 변수
    int sum = 0;
    int i = 1;
    while (i < 11) {
      sum = sum + i;
      i++;
    }
    System.out.println(sum);
  }
}
