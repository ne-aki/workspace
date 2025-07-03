package 기본예제;

public class UnivFriend extends Friend {
  private String major;

  public UnivFriend(String name, String phone, String major) {
    super(name, phone);
    this.major = major;
  }

  public void showInfo() {
    super.showInfo(); //super. 없어도 무관
    System.out.println("전공 : " + major);
  }
}
