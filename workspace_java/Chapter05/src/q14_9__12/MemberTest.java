package q14_9__12;

public class MemberTest {
  public static void main(String[] args) {
    Member m1 = new Member();
    Member m2 = new Member();
    m1.setMemberInfo("이근형","dlrmsgud1","password",27);
    m2.setMemberInfo("李根炯","dlrmsgud2","pass",25);
    m1.printMemberInfo();
    System.out.println();
    m2.printMemberInfo();
  }
}
