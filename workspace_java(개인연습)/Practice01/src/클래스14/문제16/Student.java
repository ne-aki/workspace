package 클래스14.문제16;

public class Student {
  //이름, 나이, 주소, 학번, 연락처 변수 선언
  String name;
  int age;
  String address;
  int studentNum;
  String contacts;
  //멤버변수 각각의 값을 변경하는 메소드
  public void setName(String newName) {
    name = newName;
  }
  public void setAge(int newAge) {
    age = newAge;
  }
  public void setAddress(String newAddress) {
    address = newAddress;
  }
  public void setStudentNum(int newStudentNum) {
    studentNum = newStudentNum;
  }
  public void setContacts(String newContacts) {
    contacts = newContacts;
  }
  //각각의 멤버변수 값을 리턴하는 메소드
  public String getName() {
    return name;
  }
  public int getAge() {
    return age;
  }
  public String getAddress() {
    return address;
  }
  public int getStudentNum() {
    return studentNum;
  }
  public String getContacts() {
    return contacts;
  }
  public void printStudentInfo() {
    System.out.println("이름 : " + name);
    System.out.println("나이 : " + age);
    System.out.println("주소 : " + address);
    System.out.println("학번 : " + studentNum);
    System.out.println("연락처 : " + contacts);
  }

}
