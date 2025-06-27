package 클래스14.문제17;

import java.sql.SQLOutput;

public class Calculator {
  int num1, num2;
  String operator;
  public void setNum1(int firstNum) {
    num1 = firstNum;
  }
  public void setNum2(int secondNum) {
    num2 = secondNum;
  }
  public void setOperator(String inputOperator) {
    operator = inputOperator;
  }
  public void calculate() {
    if (operator.equals("+")) {
      int result = num1 + num2;
    } else if (operator.equals("-")) {
      int result = num1 - num2;
    } else if (operator.equals("*")) {
      int result = num1 * num2;
    } else if (operator.equals("/")) {
      int result = num1 / num2;
    }

  }
  public void printCalculationResult() {
    System.out.println(num1 + operator + num2);
  }

}
