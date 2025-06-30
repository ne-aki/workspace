package list;

import java.util.ArrayList;
import java.util.List;

public class List_3 {
  public static void main(String[] args) {
//    Fruits f = new Fruits("오렌지","제주도",1000);
//    System.out.println(f.toString());
//    //.toString을 많이 쓰기 때문에 객체만 써도 뒤에 자동으로 붙는다.
//    System.out.println(f);
    //Fruits 객체를 다수 저장할 수 있는 리스트 생성
    List<Fruits> fruitsList = new ArrayList<>();

    //둘다 가
//    Fruits f1 = new Fruits("바나나","베트남",1000);
//    fruitsList.add(f1);
    fruitsList.add(new Fruits("바나나","필리핀",1000));
    fruitsList.add(new Fruits("사과","한국",2000));
    fruitsList.add(new Fruits("딸기","대한민국",3000));
    fruitsList.add(new Fruits("망고","태국",4000));
    fruitsList.add(new Fruits("파인애플","베트남",5000));

    //fruitsList에 저장된 모든 과일의 이름, 원산지, 가격을 출력
    for (int i = 0; i < fruitsList.size(); i++) {
      System.out.println(fruitsList.get(i));
    }

    //for-each문을 사용하여
    for (Fruits e : fruitsList) {
      System.out.println(e);
    }
  }
}
