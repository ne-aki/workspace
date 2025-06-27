package 실습.문제_12;

public class _6_풀이 {
  public static void main(String[] args) {
    String result = test6(10);
  }
  public static String test6(int num) {
    //문자열 -> 정수
    //파싱(parsing) : 변환, 전달
    int result = Integer.parseInt("10");
    System.out.println(result);

    //정수 -> 문자열
    String result2 = String.valueOf(10);
    System.out.println(result2);

    return num + "";
  }
}
