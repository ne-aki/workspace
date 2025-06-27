package q14_16;

public class Student {
  String name;
  int age;
  String address;
  int studentNum;
  String contact;
  public void setName(String newName) {
    name = newName;
  }
  public  void setAge(int newAge) {
    age = newAge;
  }
  public void setAddress(String newAddress) {
    address = newAddress;
  }
  public void setStudentNum(int newStudentNum) {
    studentNum = newStudentNum;
  }
  public void setContact(String newContact) {
    contact = newContact;
  }
  public String getName() {
    return getName();
  }
  public int getAge() {
    return getAge();
  }
  public String getAddress() {
    return getAddress();
  }
  public int getStudentNum() {
    return getStudentNum();
  }
  public String getContact() {
    return getContact();
  }
  public void printStudentInfo() {
    System.out.println("이름 : " + name);
    System.out.println(" : " + age);
    System.out.println(" : " + address);
    System.out.println(" : " + studentNum);
    System.out.println(" : " + contact);
  }
}
