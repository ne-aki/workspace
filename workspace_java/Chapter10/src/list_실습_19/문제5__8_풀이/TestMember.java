package list_실습_19.문제5__8_풀이;

import java.util.ArrayList;
import java.util.List;

public class TestMember {
  public static void main(String[] args) {
    List<Member> memberList = new ArrayList<>();

    //Member 클래스에 대한 객체생성
    Member m1 = new Member();
    m1.setId("hong");
    m1.setName("홍");
    m1.setPw("1234");
    m1.setAge(20);

    Member m2 = new Member("kim","2222","김",30);
    Member m3 = new Member("lee","1111","이",40);

    memberList.add(m1);
    memberList.add(m2);
    memberList.add(m3);

    for (int i = 0; i < memberList.size(); i++) {
      System.out.println(memberList.get(i));
    }

    //7번
    int ageSum = 0;
    for (int i = 0; i < memberList.size(); i++) {
      ageSum = ageSum + memberList.get(i).getAge();
    }
    System.out.println("나이의 합 : " + ageSum);
    System.out.println();

    //8번
    //id가 java인 회원이 저장된 index를 구해야함
    int index = 0;
    for (int i = 0; i < memberList.size(); i++) {
      if (memberList.get(i).getId().equals("java")) {
        index = i;
      }
    }
    memberList.remove(index);
  }

}
