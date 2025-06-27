package 실습;

public class 문제_6_3_방법2 {
  public static void main(String[] args) {
    //2 3 4 5 6 7 8 9 10
    int i = 2;
    while (i < 11) {
      //i가 짝수일 때 출력한다.
      if (i % 2 == 0) {
        System.out.print(i + " ");
      }
      i++;
    }

  }
}
