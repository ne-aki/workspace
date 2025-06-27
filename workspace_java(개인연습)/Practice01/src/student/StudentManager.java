package student;

import java.util.Scanner;

public class StudentManager {
  private Scanner sc;
  private Student[] students;
  private int cnt;
  public StudentManager() {
    sc = new Scanner(System.in);
    students = new Student[3];
    cnt = 0;
  }
  //학생등록
  public void regStu() {
    System.out.println("학생 등록을 시작합니다. 학생 정보를 입력하세요.");
    System.out.print("이름 : ");
    String name = sc.next();
    System.out.print("나이 : ");
    int age = sc.nextInt();
    System.out.print("연락처 : ");
    String contact = sc.next();
    System.out.print("학점 : ");
    String grade = sc.next();
    //학생 객체 생성
    Student stu = new Student(name,age,grade,contact);
    students[cnt] = stu;
  }
  //학생정보변경(연락처)
  public void setStuInfo(String contact) {

  }
  //학생정보출력
  //모든학생정보출력
}
