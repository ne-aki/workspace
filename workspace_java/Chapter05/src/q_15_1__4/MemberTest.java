package q_15_1__4;

public class MemberTest {
  public static void main(String[] args) {
    Member m1 = new Member();
    m1.setName("자바");
    m1.setId("java");
    m1.setPw("123");
    m1.displayInfo();
    Member m2 = new Member("자바","java","123");
    m2.displayInfo();
  }
}
