import java.util.InputMismatchException;
import java.util.Scanner;

//예외처리 문법
//try{
//  예외 발생 소지가 있는 코드 작성
//} catch(Exception e) {
//  예외 발생 시 실행 코드 작성
//}

public class Exception_1 {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);

    //try문 안에 있는 부분은 예외가 발생하면 바로 try 문 밖으로 벗어난다.
    try {
      System.out.print("첫 번재 수 : ");
      int a = scanner.nextInt();
      System.out.print("두 번재 수 : ");
      int b = scanner.nextInt();

      System.out.println(a/b);
      //Exception 클래스는 예외 발생에 대한 모든 정보를 담고 있다.
    } catch (InputMismatchException e) { //catch문 안의 내용은 예외 발생 시에만 실행!
      System.out.println("예외 발생!");
      System.out.println(e.getMessage()); //예외가 발생한 이유를 문자열로 리턴
      //예외가 발생한 위치, 이유를 알려주는 메서드
      //예외처리를 하지 않으면 printStackTrace() 메서드가 자동 호출 됨
      e.printStackTrace();
    }


    System.out.println("프로그램 종료");
  }
}
