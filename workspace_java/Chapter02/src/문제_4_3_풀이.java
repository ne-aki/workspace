import java.util.Scanner;

public class 문제_4_3_풀이 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int num1, num2; //연산에 사용될 정수 두 개가 저장딜 변수
    String oper; // +, -, *, / 등의 연산자가 저장될 변수

    System.out.print("첫 번재 수 : ");
    //키보드로 정수를 입력받아 num1변수에 저장
    num1 = sc.nextInt();

    System.out.print("두 번재 수 : ");
    //키보드로 정수를 입력받아 num2변수에 저장
    num2 = sc.nextInt();

    System.out.print("연산자 : ");
    //키보드로 연산자를 입력받아 oper변수에 저장
    oper = sc.next();

    //입력받은 연산자에 따라 연산을 진행
    //연산자가 +인 경우
    if (oper.equals("+")) {
      System.out.println(num1 + oper /* " + ", oper 둘다 와도 상관없음 */ + num2 + "=" + (num1 + num2));
    }
    //연산자가 -인 경우
    else if (oper.equals("-")) {
      System.out.println(num1 + oper + num2 + "=" + (num1 - num2));
    }
    //연산자가 *인 경우
    else if (oper.equals("*")) {
      System.out.println(num1 + oper + num2 + "=" + (num1 * num2));
    }
    //연산자가 /인 경우
    else if (oper.equals("/")) {
      System.out.println(num1 + oper + num2 + "=" + (num1 / (double)num2));
    }
    //연산자를 잘못 입력한 경우
    else {
      System.out.println("연산자를 잘못 입력하였습니다.");
    }

  }
}
