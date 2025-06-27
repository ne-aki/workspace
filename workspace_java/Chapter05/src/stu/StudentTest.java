package stu;

import java.util.Scanner;

public class StudentTest {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    System.out.println("학생관리 프로그램을 실행합니다.");

    //무한루프의 실행 여부를 저장하고 있는 변수
    boolean isRunning = true; //boolean으로 변수를 만들 때 앞에 is를 많이 붙임
    StudentManager manager = new StudentManager();

    while (isRunning) {
      System.out.print("1)학생등록  2)학생정보변경(연락처)  3)학생정보출력  4)모든학생정보출력  5)프로그램 종료 : ");
      int menu = sc.nextInt();
      switch (menu) {
        case 1 :
          manager.regStudent();
          break;
        case 2 :
          manager.changeTelInfo();
          break;
        case 3 :
          manager.printStudent();
          break;
        case 4 :
          manager.printStudentAll();
          break;
        case 5 :
          System.out.println("프로그램을 종료합니다.");
          isRunning = false;
          break;
        default: //나머지는
          System.out.println("1 ~ 5 숫자 중 하나를 입력하세요");
      }
    }
  }
}
