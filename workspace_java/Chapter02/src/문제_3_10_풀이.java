import java.util.Scanner;

public class 문제_3_10_풀이 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    System.out.print("첫번째 수 : ");
    int a = sc.nextInt();
    System.out.print("두번째 수 : ");
    int b = sc.nextInt();
    System.out.print("세 번째 수 : ");
    int c = sc.nextInt();
    int min, mid, max;

    //min, mid, max 변수에 값 저장하기
    //a가 가장 큰 경우
    if (a > b && a > c) {
      max = a;
      mid = b > c ? b : c;
      min = b > c ? c : b;
    }
    //b가 가장 큰 경우
    else if (b > a && b > c) {
      max = b;
      mid = a > c ? a : c;
      min = a > c ? c : a;
    }
    //그렇지 않으면 (c가 가장 큰 경우)
    else {
      max = c;
      mid = a > b ? a : b;
      min = a > b ? b : a;
    }
    //결과 출력
    System.out.println(max + " > " + mid + " > " + min);
  }
}
