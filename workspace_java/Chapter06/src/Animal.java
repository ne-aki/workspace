//강아지, 고양이, 소 관리
//우리 병원은 케이지가 5개가 있다.
//5개의 케이지에는 강아지, 고양이, 소가 들어갈 수 있다.
public class Animal {
  public void sound() {
    System.out.println("동물이 웁니다.");
  }
}

class Dog extends Animal {
  public void sound() {
    System.out.println("강아지가 웁니다.");
  }
}

class Cat extends Animal {
  public void sound() {
    System.out.println("고양이가 웁니다.");
  }
}

class Cow extends Animal {
  public void sound() {
    System.out.println("소가 웁니다.");
  }
}
