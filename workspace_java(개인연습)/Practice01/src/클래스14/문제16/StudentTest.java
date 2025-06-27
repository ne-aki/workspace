package 클래스14.문제16;

public class StudentTest {
  public static void main(String[] args) {
    Student s1 = new Student();
    s1.setName("이근형");
    s1.setAge(27);
    s1.setAddress("울산");
    s1.setStudentNum(20180146);
    s1.setContacts("010-4792-3663");
    s1.printStudentInfo();
    System.out.println();
    Student s2 = new Student();
    s2.setName("李根炯");
    s2.setAge(25);
    s2.setAddress("蔚山");
    s2.setStudentNum(20180146);
    s2.setContacts("+82 10-4792-3663");
    s2.printStudentInfo();
    System.out.println(s1.getAge());
  }
}
