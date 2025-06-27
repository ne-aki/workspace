import java.util.Scanner;

public class 문제_3_9 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int a;
    int b;
    System.out.print("첫번째 수 : ");
    a = sc.nextInt();
    System.out.print("두번재 수 : ");
    b = sc.nextInt();

    //a가 b보다 큰 경우를 가정
    if (a > b) {
      System.out.println(a + " > " + b);
    }

    //b가 a보다 큰 경우를 가정
    else {
      System.out.println(b + " > " + a);
    }
  }
}
