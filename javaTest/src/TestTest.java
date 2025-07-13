import java.util.Scanner;

public class TestTest {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int num = sc.nextInt();
    System.out.println("백의 자리 : " + num / 100);
    System.out.println("십의 자리 : " + num / 10 % 10);
    System.out.println("일의 자리 : " + num % 10);
  }
}
