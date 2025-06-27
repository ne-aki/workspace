package 실습.문제_12;

public class _5 {
  public static void main(String[] args) {
    String grade = getGrade(70);
    System.out.println(grade);

  }
  public static String getGrade(int num) {
    String grade;
    if (num >= 90) {
      grade = "A";
    } else if (num >= 70) {
      grade = "B";
    } else {
      grade = "C";
    }
    return grade;
  }
}
