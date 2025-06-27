package 실습.문제_13;

public class _7_풀이 {
  public static void main(String[] args) {
    String[] arr = {"a", "b", "c"};
    String result = test7(arr);
    System.out.println(result);
  }
  public static String test7(String[] arr) {
    StringBuilder result = new StringBuilder();
    for (String string : arr) {
      result.append(string);
    }
    return result.toString();
  }
}
