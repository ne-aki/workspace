import java.util.Scanner;

public class 문제_3_3 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int a, b;
    System.out.println("3. ");

    System.out.print("첫번째 수 : ");
    a = sc.nextInt();
    System.out.print("두번째 수 : ");
    b = sc.nextInt();

    //만약에 a가 b보다 크다면...
    if (a > b) {
      System.out.println("a가 큽니다.");
    }

    //그렇지 않고 만약에 b가 a보다 크다면...
    else if (b > a) {
      System.out.println("b가 큽니다.");
    }

    //a, b가 같다면..
    else {
      System.out.println("같습니다.");
    }
  }
}
