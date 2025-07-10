import java.util.Scanner;
import java.util.function.ObjDoubleConsumer;

public class Practice01 implements ObjDoubleConsumer {
  public static void main(String[] arcs) {
    System.out.println("안녕하세요");
    System.out.println("안녕");
    System.out.println(1 + 2);
    Scanner sc = new Scanner(System.in);
    sc.nextInt();
    sc.next();
  }

  @Override
  public void accept(Object o, double value) {

  }
}
