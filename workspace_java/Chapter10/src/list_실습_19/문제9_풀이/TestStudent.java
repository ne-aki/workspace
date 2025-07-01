package list_실습_19.문제9_풀이;

import java.sql.SQLOutput;
import java.util.ArrayList;
import java.util.List;

public class TestStudent {
  public static void main(String[] args) {
    //리스트 생성 및 학생 추가
    List<Student> studentList = new ArrayList<>();
    studentList.add(new Student("홍길동",70,60));
    studentList.add(new Student("이순신",70,80));
    studentList.add(new Student("임꺽정",60,60));

    //리스트에 저장된 모든 정보를 출력
    for (Student student : studentList) {
      System.out.println(student);
    }
    System.out.println();
    //총점이 150점 이상인 학생의 모든 정보를 출력
    for (Student student : studentList) {
      if (student.getTotalScore() >= 150) {
        System.out.println(student.toString());
      }
    }
    System.out.println();
    //모든 학생에 대한 평균점수
    int sum = 0;
    for (Student student : studentList) {
      sum += student.getTotalScore();
    }
    double avg = (double) sum / studentList.size();
    System.out.println("평균 : " + avg);
    System.out.println();
    //총점이 1등인 학생의 모든 정보를 출력
    //studentList.get(1).toString();
    int maxIndex = 0; //가장 큰 점수를 가진 학생이 저장된 index가 필요함
    for (int i = 1; i < studentList.size(); i++) {
      if (studentList.get(i).getTotalScore() > studentList.get(maxIndex).getTotalScore()) {
        maxIndex = i;
      }
    }
    System.out.println(studentList.get(maxIndex));
  }
}
