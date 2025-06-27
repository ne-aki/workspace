import java.util.Scanner;

public class 무한루프_연습 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    while (true) {
      System.out.print("점수 : ");
      int score = sc.nextInt();
      if (score >= 0 && score <= 100) {
        break;
      }
    }

  }
}
