package 실습.문제_12;

public class _10_풀이 {
  public static void main(String[] args) {
    boolean result = test10("java");
    System.out.println(result);
  }
  public static boolean test10(String str) {
    //문자열.length -> 문자열의 길이를 리턴하는 메소드
//    return str.length() % 2 == 0 ? true : false;
    return str.length() % 2 == 0;
  }
}
