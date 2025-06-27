package 실습.문제_12;

public class _8 {
  public static void main(String[] args) {
    double avgResult = getAvg(3,5,6);
    System.out.println(avgResult);
  }
  public static double getAvg(int num1, int num2, int num3) {
    return (double) (num1 + num2 + num3) / 3;
  }
}