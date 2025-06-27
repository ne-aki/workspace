package q14_15;

public class ManTest {
  public static void main(String[] args) {
    Man m1 = new Man();
    Man m2 = new Man();
    m1.setMan("김",20,"서울");
    m2.setName("田中");
    m2.setAge(25);
    m2.setAddress("東京");
    m1.printMan();
    m2.printMan();

    //나이값만 출력
    System.out.println(m1.age);
    System.out.println(m2.getAge()); //이 방식으로 써야함
    //이름만 출력
    System.out.println(m2.getName());
    //m1 객체의 이름이 "이름"이면 "참" 문자열 출력
    if (m1.getName().equals("김")) {
      System.out.println("참");
    }
  }
}
