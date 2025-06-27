import java.util.Scanner;

public class 문제_3_4 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    System.out.print("정수 입력 : ");
    int num;
    num = sc.nextInt();

    //mum이 3의 배수라면...
    if (num % 3 == 0) {
      System.out.println("3의 배수입니다");
    }
  }
}
