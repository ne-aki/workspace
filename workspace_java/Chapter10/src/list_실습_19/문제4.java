package list_실습_19;

import java.util.ArrayList;
import java.util.List;

public class 문제4 {
  public static void main(String[] args) {
    //정수를 저장할 수 있는 리스트 생성
    List<Integer> randomNum = new ArrayList<>();

    //1~100까지의 랜덤한 정수를 10번 리스트에 저장
    for (int i = 0; i < 10; i++) {
      int num = (int) (Math.random() * 100 + 1);
      randomNum.add(num);
    }
    //짝수의 갯수와 모든 짝수를 출력
    int cnt = 0;
    for (int i = 0; i < randomNum.size(); i++) {
      if (randomNum.get(i) % 2 == 0) {
        System.out.print(randomNum.get(i) + " ");
      }
    }
    System.out.println();
    System.out.println("짝수의 개수 : " + cnt);
  }
}
