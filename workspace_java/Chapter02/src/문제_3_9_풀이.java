import java.util.Scanner;

public class 문제_3_9_풀이 {

    public static void main(String[] args) {
      Scanner sc = new Scanner(System.in);
      int a;
      int b;
      System.out.print("첫번째 수 : ");
      a = sc.nextInt();
      System.out.print("두번재 수 : ");
      b = sc.nextInt();

      //min 작은 값을 저작할 변수
      //max 큰 값을 저장앟ㄹ변수
      int min, max;


      //a가 b보다 큰 경우를 가정
      if (a > b) {
        max = a;
        min = b;
      }

      //b가 a보다 큰 경우를 가정
      else {
        max = b;
        min = a;
      }
      System.out.println(max + " > " + min);
    }
  }
