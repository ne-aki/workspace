import java.util.Scanner;

public class 문제_3_5 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int score;
    System.out.print("0 ~ 100 숫자 입력 : ");
    score = sc.nextInt();

    //학점(A,B,C) 데이터를 저장하는 변수
    String grade = "";

    //90보다 크고 100보다 작은 경우
    if (score > 90 && score <= 100) {
      grade = "A";
    }

    //80보다 크고 90보다 작은 경우
    else if (score > 80 /* && score <= 90 */) {
      grade = "B";
    }

    //나머지 경우
    else{
      grade = "C";
    }

    System.out.println("학점은 " + grade + "입니다.");
  }
}
