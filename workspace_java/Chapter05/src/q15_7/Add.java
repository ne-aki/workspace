package q15_7;

public class Add {
  private int a;
  private int b;
  //피연산자를 객체 내에 설정한다.
  public void setValue(int a, int b) {
    this.a = a;
    this.b = b;
  }
  //해당 클래스의 목적에 맞는 연산을 실행, 그 결과를 리턴
  public int calculate() {
    return a + b;
  }

}
