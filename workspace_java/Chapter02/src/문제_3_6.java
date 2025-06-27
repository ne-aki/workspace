import java.util.Scanner;

public class 문제_3_6 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int num = 3;
    System.out.println("6. ");
    num = sc.nextInt();
    //5의 배수가 아니면
    if (num % 5 != 0) {
      System.out.println("5의 배수를 입력하시오");
    }
  }
}
