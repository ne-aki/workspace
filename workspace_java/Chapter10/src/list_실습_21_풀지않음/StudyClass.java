package list_실습_21_풀지않음;

import java.util.ArrayList;
import java.util.List;

public class StudyClass {
  private List<Student> students;
  private String className;
  private String teacher;

  public StudyClass(String className, String teacher) {
    students = new ArrayList<>();
    this.className = className;
    this.teacher = teacher;
    students.add(new Student("김자바",15,95));
    students.add(new Student("박자바",14,88));
    students.add(new Student("이자바",16,56));
  }

  public void printInfo() {
    System.out.println(students);
  }
}
