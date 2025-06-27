package 실습.문제_12;

public class _5_풀이 {
  public static void main(String[] args) {
    String grade = getGrade(85);
    System.out.println(grade);

  }
  public static String getGrade(int num) {
    if (num >= 90) {
      return "A";
    } else if (num >= 70) {
      return "B";
    } else {
      return "C";
    }
  }
}
