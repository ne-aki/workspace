package 문제_23_8;

import java.security.PublicKey;

class A {
  private int x;
  private int y;

  public A() {
    x = 1;
    y = 1;
  }

  public A(int x) {
    this.x = x;
    y = 1;
  }

  public A(int x, int y) {
    this.x = x;
    this.y = y;
  }

  public void disp() {
    System.out.println(", x = " + x + ", y = " + y);
  }
}

class B extends A {
  private int x;
  private int y;

  public B() {
    //super(); 생략됨
    x = 1;
    y = 1;
  }

  public B(int x) {
    //super(); 생략
    this.x = x;
    y = 1;
  }

  public B(int x, int y) {
    this.x = x;
    this.y = y;
  }

  public B(int x1, int y, int x2) {
    super(x2);
    x = x1;
    this.y = y;
  }

  public B(int x1, int y1, int x2, int y2) {
    super(x2,y2);
    x = x1;
    y = y1;
  }

  public void disp() {
    System.out.print("x = " + x + ", y = " + y);
    super.disp();
  }
}

public class Work {

  public static void main(String[] args) {
    B bp = new B();
    B bp1 = new B(10);
    B bp2 = new B(10, 20);
    B bp3 = new B(10, 20, 30);
    B bp4 = new B(10, 20 ,30, 40);

    bp.disp();
    bp1.disp();
    bp2.disp();


    bp3.disp();
    bp4.disp();
  }
}
