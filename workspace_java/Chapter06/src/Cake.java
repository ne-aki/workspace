public class Cake {
  public void eatCake() {
    System.out.println("ケーキを食べる");
  }
}

class CheeseCake extends Cake {
  public void eatCheeseCake() {
    System.out.println("チーズケーキを食べる");
  }
}

class StrawberryCheeseCake extends CheeseCake {
  public void eatStrawberryCheeseCake() {
    System.out.println("いちごチーズケーキを食べる");
  }
}
