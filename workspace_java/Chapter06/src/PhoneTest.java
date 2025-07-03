public class PhoneTest {
  public static void main(String[] args) {
    //다형성 : 객체의 형태가 다양하다.
    //객체 생성 방법을 다양하게 가질 수 있다.
    //부모클래스는 자식객체를 전부 받아들인다.
    //자식클래스는 부모객체를 못 받는다.

    MobilePhone m = new MobilePhone();
    SmartPhone p = new SmartPhone();

    //모바일폰 주세요~ 스마트폰을 전달해 준다. o
    //m1 객체는 실체는 SmartPhone 객체다!
    //단, 현제는 MobilePhone 객체로 인식을 하고 있기 때문에
    //모바일폰 클래스에서 정의한 메서드, 멤버변수만 사용 가능!
    MobilePhone m1 = new SmartPhone();

    //형변환을 통해 MobilePhone 객체를 SmartPhone 객체로 변경할 수 있다.
    SmartPhone pp = (SmartPhone) m1;
    pp.playApp();

    //MobilePhone 객체를 강제로 SmartPhone 객체로 형 변환 할 수는 없다.
    //실행 전 빨간줄(빨간 글자)로 알려주는 오류를 컴파일 오류라 한다.
    //빨간줄이 생기지 않지만, 실행 시 발생하는 오류를 런타임 오류라 한다.
    MobilePhone m2 = new MobilePhone();
    SmartPhone p3 = (SmartPhone) m2;
    p3.playApp();

    //스마트폰 주세요~ 모바일폰을 전달해 준다. x
    //SmartPhone p1 = new MobilePhone(); 오 류발생!
  }
}
