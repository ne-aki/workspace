public class Restaurant {
  private String name;
  private Cookable chief;

  //영업 중...
  public void open() {
    chief.cook();
  }
}
