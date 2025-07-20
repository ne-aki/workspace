package 클래스심화;

public class Student {
  private String name;
  private int age;
  private String grade;
  private String tel;

  public Student() {}

  public Student(String name, int age, String grade, String tel) {
    this.name = name;
    this.age = age;
    this.grade = grade;
    this.tel = tel;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public int getAge() {
    return age;
  }

  public void setAge(int age) {
    this.age = age;
  }

  public String getGrade() {
    return grade;
  }

  public void setGrade(String grade) {
    this.grade = grade;
  }

  public String getTel() {
    return tel;
  }

  public void setTel(String tel) {
    this.tel = tel;
  }
}
