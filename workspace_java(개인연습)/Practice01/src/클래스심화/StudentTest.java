package 클래스심화;

import java.util.Scanner;

public class StudentTest {
  private Scanner sc;
  private Student[] students;
  private int nthStudent;

  public StudentTest() {
    sc = new Scanner(System.in);
    students = new Student[3];
    nthStudent = 0;
  }

  //학생 등록 메서드
  public void regStudent() {
    students[nthStudent].setName(sc.next());
    students[nthStudent].setAge(sc.nextInt());
    students[nthStudent].setTel(sc.next());
    students[nthStudent].setGrade(sc.next());
    nthStudent++;
  }

  //학생 연락처 변경 메서드
  public void changeTel() {
    System.out.println("학생의 연락처를 변경합니다.");
    System.out.print("변경 학생 : ");
  }

  //학생정보출력 메서드
  public void printStudentInfo() {
  }
}
