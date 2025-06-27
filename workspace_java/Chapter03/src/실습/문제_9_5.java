package 실습;

public class 문제_9_5 {
  public static void main(String[] args) {
    int[] lotto = new int[6];

    for (int i = 0; i < lotto.length; i++) {
      //1~45의 랜덤한 정수 생성
      //0 <= x < 1.0 실수를 반환
      int rand = (int) (Math.random() * 45 + 1);
      //생성한 정수를 배열에 저장
      lotto[i] = rand;
    }

    for (int e : lotto) {
      System.out.println(e);
    }


  }
}
