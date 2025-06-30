package list_실습_19.문제9;

import java.util.ArrayList;
import java.util.List;

public class TestStudent {
  public static void main(String[] args) {
    List<Student> students = new ArrayList<>();
    Student s1 = new Student("김자바",82,68);
    Student s2 = new Student("이베드락",52,47);
    Student s3 = new Student("박교육",95,100);
    students.add(s1);
    students.add(s2);
    students.add(s3);
    System.out.println(students);
    for (int i = 0; i < students.size(); i++) {
      if (students.get(i).getTotalScore() >= 150) {
        System.out.println(students.get(i));
      }
    }

    double avg = 0;
    int sum = 0;
    for (Student e : students) {
      sum += e.getTotalScore();
      avg = (double) sum / students.size();
    }
    System.out.println(avg);

    int max = students.get(0).getTotalScore();
    for (Student e : students) {
      if (e.getTotalScore() > max) {
        max = e.getTotalScore();
        System.out.println(e);
      }
    }
  }
}
