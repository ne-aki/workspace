public class 삼항연산자 {
  public static void main(String[] args) {
    //삼항연산자 : 항이 세개 있는 연산자, if - else와 같은 기능
    //문법 -> 참 또는 거짓을 판별할 수 있는 조건 ? 참일때 값 : 거짓일 때 값

    int num = 3;
    String result = "";
    if (num > 1) {
      result = "참";
    }
    else {
      result = "거짓";
    }
    System.out.println(result);

    /// ///////////////////////////////////////////////////
    int a = 3;

    //소괄호 안의 내용을 출력하고 할 줄 개행한다.
    //만약 소괄호 안의 내용이 연산 가능하면 연산 결과를 출력한다.
//    String newResult = "";

    //삼항연산자
//    newResult = a > 1 ? "참" : "거짓";
//
//    System.out.println(newResult);



    System.out.println(a > 1 ? "참" : "거짓");

    int b = 10;
    System.out.println(b);

    System.out.println(10);

  }
}
