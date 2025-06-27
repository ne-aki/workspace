public class PhoneTest2 {
  public static void main(String[] args) {
    //Phone 클래스에 대한 객체 3개 생성
    Phone p1 = new Phone();
    Phone p2 = new Phone();
    Phone p3 = new Phone();

    //p1 객체에 필드들을 변경
    p1.modelName = "s1";
    p1.price = 1000;
    p1.os = "mac";

    //p2 객체의 필드 변경
    p2.setModelName("s2");
    p2.setPrice(1100);
    p2.setOs("Android");

    //p3 객체의 필드 변경
    p3.setPhoneInfo("s3",1200,"iOS");

    //모든 객체의 정보 출력
    p1.printPhoneInfo();
    p2.printPhoneInfo();
    p3.printPhoneInfo();
  }
}
