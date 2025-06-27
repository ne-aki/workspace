package 배열09;

public class 문제5 {
  public static void main(String[] args) {
    int[] lotto = new int[6];
    for (int i = 0; i < lotto.length; i++) {
      lotto[i] = (int) ((Math.random() + 1) * 45);
      System.out.println(lotto[i]);
    }
  }
}
