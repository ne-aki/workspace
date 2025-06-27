import java.util.Scanner;

public class if_03_10 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    //세 정수를 선언
    int num1, num2, num3;
    //값 입력
    System.out.print("첫번째 수 : ");
    num1 = sc.nextInt();
    System.out.print("두번째 수 : ");
    num2 = sc.nextInt();
    System.out.print("세번째 수 : ");
    num3 = sc.nextInt();

    //최대값, 중간값, 최소값 변수 선언
    int max, mid, min;
    if (num1 > num2 && num1 > num3) {
      max = num1;
      mid = Math.max(num2, num3);
      min = Math.min(num2, num3);
    } else if (num2 > num1 && num2 > num3) {
      max = num2;
      mid = Math.max(num1, num3);
      min = Math.min(num1, num3);
    } else {
      max = num3;
      mid = Math.max(num1, num2);
      min = Math.min(num1, num2);
    }
    System.out.println(max + " > " + mid + " > " + min);
  }
}
