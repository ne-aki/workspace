package q15_7;

import q14_17_풀이.Calculator;

import java.util.Scanner;

public class Result {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    Add add = new Add();
    Sub sub = new Sub();
    Mul mul = new Mul();
    Div div = new Div();
    System.out.print("첫 번째 수 : ");
    int a = sc.nextInt();
    System.out.print("두 번재 수 : ");
    int b = sc.nextInt();
    System.out.print("연산자 : ");
    String oper = sc.next();
    add.setValue(a,b);
    sub.setValue(a,b);
    mul.setValue(a,b);
    div.setValue(a,b);
    switch (oper) {
      case "+" :
        System.out.println(a + oper + b + "=" + add.calculate());
        break;
      case "-" :
        System.out.println(a + oper + b + "=" + sub.calculate());
        break;
      case "*" :
        System.out.println(a + oper + b + "=" + mul.calculate());
        break;
      case "/" :
        System.out.println(a + oper + b + "=" + div.calculate());
    }
  }
}
