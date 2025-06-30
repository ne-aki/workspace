package list_실습_19;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class 문제2 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    List<Integer> intList = new ArrayList<>();
    for (int i = 0; i < 5; i++) {
      System.out.print("정수 입력 : ");
      intList.add(sc.nextInt());
    }
    int sum = 0;
    for (int e : intList) {
      sum += e;
    }
    System.out.println(sum);
  }
}
