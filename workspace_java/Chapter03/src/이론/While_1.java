package 이론;

public class While_1 {
  public static void main(String[] args) {
    System.out.println("프로그램 시작");

    //"안녕하세요"를 5번 출력

    //반복의 시작 지점
    int num = 1;

    //num이 6보다 작으면(작은 동안)... 반복조건
    while (num < 6) {
      System.out.println("안녕하세요");
      num++; //반복 조건을 파기하는 코드 反復条件を破棄するコード
    }

    System.out.println(num);

    System.out.println("프로그램 종료");

  }
}
