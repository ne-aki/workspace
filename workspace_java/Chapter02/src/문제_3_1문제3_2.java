import java.util.Scanner;

public class 문제_3_1문제3_2 {
  public static void main(String[] args) {
    //1
    //정수를 저장할 두 변수 a, b 선언
    int a, b;

    //두 변수 a, b에 임의의 정수 저장
    a = 10;
    b = 20;

    //만약에 두 수의 합이 50보다 크다면
    System.out.println("1. ");
    if (a + b > 50) {
      System.out.println("두 수의 합이 50보다 큽니다.");
    }
    else {
      System.out.println("두 수의 합이 50이하입니다.");
    }

    //2
    //Scanner 생성
    Scanner sc = new Scanner(System.in);

    //키보드로 입력받은 정수를 저장할 변수를 선언
    int num;

    System.out.println("2. ");
    //키보드로 정수를 입력받아, 그 값을 변수 num에 저장
    num = sc.nextInt();
    //짝수이면...
    if (num % 2 == 0 && num != 0 ) {
      System.out.println("짝수입니다.");
    }
    //0은 짝수가 아님
    //홀수이면...
    else if (num % 2 != 0){
      System.out.println("홀수입니다.");
    }
    //0이라면
    else {
      System.out.println("0입니다.");
    }
  }
}
