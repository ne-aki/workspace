package q15_6_풀이;

public class Rectangle {
  private int x1;
  private int y1;
  private int x2;
  private int y2;

  public Rectangle() {}

  public Rectangle(int x1, int y1, int x2, int y2) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }

  public void set(int x1, int y1, int x2, int y2) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }

  public int square() {
    return (x2 - x1) * (y2 - y1);
  }

  public void show() {
    System.out.println("좌표 : " + "(" + x1 + "," + y1 + ") (" + x2 + "," + y2 + ")");
    System.out.println("넓이 : " + square());
  }

  //인자로 전달된 객체 r과 현 객체의 넓이가 같으면 리턴 true
  //호출된 메소드의 매개변수에 데이터를 넣은 값을 인자라고 함
  public boolean equals(Rectangle r) {
    return square() == r.square();
  }
}
