import java.util.InputMismatchException;

//예외전가
public class Exception_4 {
  public static void main(String[] args) {
    try {
      method1(7);
    } catch (Exception e) {
      System.out.println("除外発生");
    }
    System.out.println("프로그램 종료");
  }

  public static void method1(int a) throws Exception {
    method2(a, 0);
  }

  public static void method2(int a, int b) throws Exception { //예외를 떠넘김
    int result = a / b;

  }
}
