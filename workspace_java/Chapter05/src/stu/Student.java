package stu;

public class Student {
  private String name;
  private int age;
  private String grade;
  private String tel;

  public Student(String name, int age, String grade, String tel) {
    this.name = name;
    this.age = age;
    this.grade = grade;
    this.tel = tel;
  }

  public String getName() {
    return name;
  }

  public void setTel(String tel) {
    this.tel = tel;
  }

  public void display() {
    System.out.print("이름 : " + name);
    System.out.print(", 나이 : " + age);
    System.out.print(", 연락처 : " + tel);
    System.out.println(", 학점 : " + grade);
  }
}
