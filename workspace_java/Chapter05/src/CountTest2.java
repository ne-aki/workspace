public class CountTest2 {
  public static void main(String[] args) {
    System.out.println(Count.cnt);
    Count.cnt = 10;
    System.out.println(Count.cnt);
    Count c2 = new Count();
    Count.aaa();

    Math.random();
    Math.max(10,20);
    System.out.println(11);
    System.out.println("java");

    Count c1 = new Count();
    System.out.println(Count.cnt);
  }
}
