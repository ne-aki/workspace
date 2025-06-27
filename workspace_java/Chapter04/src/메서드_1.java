//자바 코드는 main 메서드의 첫줄부터 마지막줄을 차례로 실행!
public class 메서드_1 {
  public static void main(String[] args) {
    System.out.println("開始");
    hello();
    System.out.println("終了");
  }

  //"안녕" 문자열을 출력하는 기능을 가진 메서드를 정의
  //"안녕" 文字列を出力する機能を持つメソードを定義
  public static void hello() {
    System.out.println("반갑");
  }

}
