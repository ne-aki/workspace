import java.util.Scanner;

public class Test3 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    System.out.print("1~999 사이의 정수 입력 : ");
    int num = sc.nextInt();

    //박수 개수를 저장할 변수
    int clapCnt = 0;

    //자릿수 분리
    //백의 자리
    int hundreds = num / 100;
    //십의 자리
    int tens = num / 10 % 10;
    //일의 자리
    int units = num % 10;
    //백의 자리 숫자가 3, 6, 9라면 박수 개수 증가
    if (hundreds % 3 == 0) {
      clapCnt++;
    }
    //십의 자리 숫자가 3, 6, 9라면 박수 개수 증가
    if (tens % 3 == 0) {
      clapCnt++;
    }
    //일의 자리 숫자가 3, 6, 9라면 박수 개수 증가
    if (units % 3 == 0) {
      clapCnt++;
    }
    //cnt가 0~3의 값을 가짐
    switch (clapCnt) {
      case 0 :
        System.out.println("박수 " + clapCnt + "번");
        break;
      case 1 :
        System.out.println("박수 " + clapCnt + "번");
        break;
      case 2 :
        System.out.println("박수 " + clapCnt + "번");
        break;
      case 3 :
        System.out.println("박수 " + clapCnt + "번");
    }
  }
}
