public class MyMath implements MathUtil {
  //매개변수로 전달된 세 정수의 합이 짝수이면서, 동시에 세 정수의 합이 5의 배수일 경우에만 리턴 true, 다른 경우에는 리턴 false'
  @Override
  public boolean isEven(int a, int b, int c) {
    int sum = a + b + c;
    return sum % 2 == 0 && sum % 5 == 0;
  }

  //1부터 매개변수로 받은 정수까지의 합을 리턴
  @Override
  public double getSumFromOne(int num) {
    int sum = 0;
    for (int i = 1; i < num + 1; i++) {
      sum += i;
    }
    return sum;
  }

  //매개변수로 넘어오는 반지름을 갖는 원의 넓이를 리턴
  //단, 매개변수로 전달된 반지름이 음수라면 원의 넓이는 0으로 리턴
  @Override
  public double getCircleArea(int rad) {
    return rad >= 0 ? Math.pow(rad,2) * Math.PI : 0;
    //Math.PI에서 'PI'는 상수
  }
}
