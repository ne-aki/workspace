interface Cookable {
  public void cook();
}

public class Chief implements Cookable {
  @Override
  public void cook() {
    System.out.println("요리합니다");
  }
}

class NewChief implements Cookable {
  @Override
  public void cook() {
    System.out.println("요리");
  }
}
