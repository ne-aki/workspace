package q_15_1__4;

import javax.naming.Name;

public class Member {
  //필드로 이름, 아이디 비밀번호
  private String name;
  private String id;
  private String pw;
  public Member() {
    name = "";
    id = "";
    pw = "";
  }
  public Member(String name, String id, String pw) {
    this.name = name;
    this.id = id;
    this.pw = pw;
  }
  public void setName(String name) {
    this.name = name;
  }
  public void setId(String id) {
    this.id = id;
  }
  public void setPw(String pw) {
    this.pw = pw;
  }
  public String getName() {
    return name;
  }
  public String getId() {
    return id;
  }
  public String getPw() {
    return pw;
  }
  public void displayInfo() {
    System.out.println("이름 : " + name);
    System.out.println("아이디 : " + id);
    System.out.println("비밀번호 : " + pw);
  }
}
