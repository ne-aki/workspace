package 실습;

public class 문제_6_1 {
  public static void main(String[] args) {
    //프로그램 시작은 0부터 하고 < 기호를 씀
    int i = 0; //i -> index(목차, 순서) 통상적으로 반복문은 i로씀
    while (i < 5) {
      System.out.print("*");
      i++;

    }
    /// /////////////////////////////////
    for (int j = 0; j < 5; j++) {
      System.out.print("*");
    }
  }
}
