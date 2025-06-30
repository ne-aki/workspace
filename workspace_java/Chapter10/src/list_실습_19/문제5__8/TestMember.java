package list_실습_19.문제5__8;
import java.util.ArrayList;
import java.util.List;

public class TestMember {
  public static void main(String[] args) {
    List<Member> memberList = new ArrayList<>();
    Member m1 = new Member("java","jv","김자바",20);
    Member m2 = new Member("bedrock","be","김베드락",25);
    Member m3 = new Member("education","minecraft","마크",30);
    memberList.add(m1);
    memberList.add(m2);
    memberList.add(m3);
    for (int i = 0; i < 3; i++) {
      System.out.println(memberList.get(i));
    }

    int sum = 0;
    for (Member e : memberList) {
      sum += e.getAge();
    }
    System.out.println(sum);

    for (int i = 0; i < memberList.size(); i++) {
      if (memberList.get(i).getId().equals("java")) {
        memberList.remove(i);
      }
    }
  }
}
