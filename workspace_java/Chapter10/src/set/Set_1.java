package set;

import java.util.HashSet;
import java.util.TreeSet;

public class Set_1 {
  public static void main(String[] args) {
    //다수의 문자열을 저장할 통 + 순서 x, 중복데이터 저장 x
    TreeSet<String> set = new TreeSet<>();
    set.add("java");
    set.add("python");
    set.add("c++");
    set.add("c++");
    System.out.println(set.size());
    System.out.println();

    for (String e : set) {
      System.out.println(e);
    }
  }
}
