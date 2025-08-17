public class TestClass {
  void exe(int[] arr) {
    System.out.println(func(func(5, 5), 5, func(arr)));
  }
  int func (int a, int b) {
    return a + b;
  }
  int func(int a, int b, int c) {
    return a - b;
  }
  int func(int[] c) {
    int s = 0;
    for (int i = 0; i < c.length; i++) {
      s += c[i];
    }
    return s;
  }
}


