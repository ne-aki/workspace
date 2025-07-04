public class TvTest {
  public static void main(String[] args) {
    Tv tv = new Tv();
    Tv tv1 = new Tv();

    //tv 객체와 tv1 객체의 참조값이 같나?
    System.out.println(tv.equals(tv1));
    String name = "kim";
    name.equals("kim");

    tv = tv1;
    //tv 객체와 tv1 객체의 참조값이 같나?
    System.out.println(tv.equals(tv1));

    Rect r1 = new Rect();
    System.out.println(r1.toString());
    System.out.println(r1);

    int[] arr = new int[2];
    System.out.println(arr.toString());
    System.out.println(arr);

    Rect r2 = new Rect();
    r2.width = 10;

    System.out.println(r1.equals(r2));

    String aa = "kim";
    aa.equals("kim");

    //자료형 변수명;
    //int a; (변수명)
    //String b; (변수명, 참조변수명, 객체)
    //Rect r; (변수명, 참조변수명, 객체)
    //int[] a; (변수명, 참조변수명, 객체, 배열)
    //List<String> a; (변수명, 참조변수명, 객체, 리스트)
  }
}
