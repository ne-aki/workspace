package q14_17_풀이;

import java.util.Scanner;

public class CalTest {
  public static void main(String[] args) {
    Scanner scan = new Scanner(System.in);
    System.out.print("첫 번째 수 : ");
    int num1 = scan.nextInt();
    System.out.print("두 번째 수 : ");
    int num2 = scan.nextInt();
    System.out.print("연산자 : ");
    String oper = scan.next();

    //if문은 조건에 맞는 것을 실행,
    //switch case는 조건에 맞는 것부터 아래 모든 내용 실행
    Calculator cal = new Calculator();

    //cal 객체가 가진 num1과 num2 변수에 키보드로 입력받은 값을 저장시켜야 한다!0.


    cal.setNum(num1,num2);
    switch (oper) {
      case "+" :
        System.out.println(num1 + oper + num2 + "=" + cal.getSum());
        break;
      case "-" :
        System.out.println(num1 + oper + num2 + "=" + cal.getSub());
        break;
      case "*" :
        System.out.println(num1 + oper + num2 + "=" + cal.getMulti());
        break;
      case "/" :
        System.out.println(num1 + oper + num2 + "=" + cal.getDiv());
        break;
    }
  }
}
