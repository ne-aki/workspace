class ClassicPhone{
  public ClassicPhone() {
    System.out.println("1");
  }
}

public class Phone extends ClassicPhone {
  private String modelName;
  private int price;

  public Phone() {
    modelName = "";
    price = 0;
  }

  public Phone(String modelName) {
    this(); //자신의 매개변수가 없는 생성자를 호출
    this.modelName = modelName;
  }

//  public Phone(String modelName, int price) {
//    this.modelName = modelName;
//    this.price = price;
//  }

  //상속 관계에 있는 클래스 중 자식 클래스의 생성자 첫 줄에는 부모 클래스의 생성자를 호출하는 super 키워드가 숨겨져 있다.
  //단, 생성자에 자신의 생성자를 호출하는 this()라는 키워드가 있으면, super() 키워드가 없는 것으로 간주한다.
  public Phone(String modelName, int price) {
    this(modelName); //this();
    this.price = price;
  }
}
