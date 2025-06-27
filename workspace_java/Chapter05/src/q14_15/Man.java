package q14_15;

public class Man {
  //멤버 변수 선언
  String name;
  int age;
  String address;
  //멤버변수의 모든 값을 초기화할 수 있는 메소드
  public void setMan(String newName, int newAge, String newAddress) {
    name = newName;
    age = newAge;
    address = newAddress;
  }
  //멤버변수 각각의 값을 변경하는 메소드 3개
  public void setName(String newName) {
    name = newName;
  }
  public void setAge(int newAge) {
    age = newAge;
  }
  public void setAddress(String newAddress) {
    address = newAddress;
  }
  //각 멤버변수의 값을 리턴하는 메소드 3개
  public String getName() {
    return name;
  }
  public int getAge() {
    return age;
  }
  public String getAddress() {
    return address;
  }
  //멤버변수의 모든 정보를 출력하는 메소드
  public void printMan() {
    System.out.println("이름 : " + name);
    System.out.println("나이 : " + age);
    System.out.println("주소 : " + address);
  }
}
