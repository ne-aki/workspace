package q14_17_풀이;

public class Calculator {
  int num1, num2;
  String oper;
  public void setNum(int num1, int num2) {
    this.num1 = num1;
    this.num2 = num2;
  }
  //더하기 기능(더한 결과를 리턴)
  public int getSum() {
    return num1 + num2;
  }
  //빼기 기능(뺀 결과를 리턴)
  public int getSub() {
    return num1 - num2;
  }
  //곱하기 기능(곱한 결과를 리턴)
  public int getMulti() {
    return num1 * num2;
  }
  //나누기 기능(나눈 결과를 리턴)
  public double getDiv() {
    return (double) num1 / num2;
  }
}
