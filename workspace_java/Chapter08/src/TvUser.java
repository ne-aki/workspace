public class TvUser {
  public static void main(String[] args) {
    //삼성TV 설치
    //인터페이스는 인터페이스만으로는 객체 생성 불가!
    //단, 인터페이스를 구현한 클래스의 생성자 호출을 통해 인터페이스 객체 생성 가능!
    Tv tv = new LgTv() {
    };
    tv.turnOn();
    tv.volumeUp();
    tv.volumeDown();
    tv.turnOff();
  }
}
