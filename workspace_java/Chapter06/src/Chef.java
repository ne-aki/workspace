//메서드 오버라이딩(Method overriding)
//상속 관계에 있는 두 클래스에서 부모클래스에서 정의된 메서드를
//자식클래스에서 똑같이 재정의하는 것을 메서드 오버라이딩이라 함
//주의 - 매개변수 정보도 동일해야 함!
//메서드 오버라이딩을 하면, 자식 클래스에서는 부모클래스에서 선언된
//메서드를 사용할 수 없다!
public class Chef {
  public void makeCook() {
    System.out.println("쉐프가 요리를 합니다.");
  }
}

class MasterChef extends Chef {
  public void giveOrder() {
    System.out.println("후임 요리사에게 지시를 합니다.");
  }

  public void makeCook() {
    System.out.println("마스터 쉐프가 요리를 합니다.");
  }
}
