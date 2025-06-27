package q_15_5;

import java.security.PublicKey;

public class Member {
  //작성위치
  private String name;
  private String id;
  private String password;
  private int age;

  public Member() {
    name = "";
    id = "";
    password = "";
    age = 1;
  }

  public Member(String name, String id) {
    this.name = name;
    this.id = id;
  }

  public void printMember() {
    System.out.println(name);
    System.out.println(id);
    System.out.println(password);
    System.out.println(age);
  }
}
