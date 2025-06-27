package q14_9__12;

public class Member {
  String name;
  String id;
  String pw;
  int age;
  public void setMemberInfo(String name1, String id1, String pw1, int age1) {
    name = name1;
    id = id1;
    pw = pw1;
    age = age1;
  }
  public void printMemberInfo() {
    System.out.println("이름 : " + name);
    System.out.println("아이디 : " + id);
    System.out.println("비밀번호 : " + pw);
    System.out.println("나이 : " + age);
  }
}
