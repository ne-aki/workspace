package 이론;

public class 랜덤 {
  public static void main(String[] args) {
    //0 <= x < 1(0에서 1사이)의 랜덤한 실수를 반환
    //50 <= x < 100 사이의 랜덤한 정수
    int r = (int)((Math.random() + 1) * 50);
    System.out.println(r);
  }
}
