package list_실습_19;

import java.util.ArrayList;
import java.util.List;

public class 문제1 {
  public static void main(String[] args) {
    List<String> list = new ArrayList<>();
    list.add("가");
    list.add("나");
    list.add("다");
    System.out.println(list.get(0));
    System.out.println(list.get(1));
    System.out.println(list.get(2));
  }
}
