import java.util.Scanner;

public class 문제_5_3 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    System.out.print("1~99 사이의 정수를 입력하시오>>");
    int num = sc.nextInt();

    //박수의 개수를 저장할 변수
    int clapCnt = 0;// cnt : count의 준말

    //입력받은 수를 십의자리의 수와 일의자리의 수로 분리
    int tens = num / 10;
    int ones = num % 10;

    //십의 자리 의 숫자가 3,6,9라면...
    //if (tens == 3 || tens == 6 || tens == 9){
    if (tens % 3 == 0 && tens != 0) {
      //박수의 개수를 1증가
      clapCnt++;
    }

    //일의 자리의 숫자가 3,6,9라면...
    if (ones % 3 == 0 && tens != 0) {
      clapCnt++;
    }

    //clapCnt가 0~2의 값을 가짐
    switch (clapCnt) {
      case 1:
        System.out.println("박수짝");
        break;
      case 2:
        System.out.println("박수짝짝");
    }

  }
}
