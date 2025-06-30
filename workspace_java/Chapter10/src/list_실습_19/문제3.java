package list_실습_19;

import java.util.ArrayList;
import java.util.List;

public class 문제3 {
  public static void main(String[] args) {
    List<String> names = new ArrayList<>();
    names.add("dasfkjdl");
    names.add("dasfqwer");
    names.add("wqerwqerkjdl");
    names.add("43");
    names.add("홍길동");
    names.add("이근형");
    names.add("홍길동");
    names.add("d");
    for (int i = 0; i < names.size(); i++) {
      if (names.get(i).equals("홍길동")) {
        System.out.println("해당 이름이 존재합니다.");
      }
    }
  }
}
