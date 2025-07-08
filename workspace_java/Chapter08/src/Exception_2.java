import java.util.Arrays;
import java.util.InputMismatchException;

public class Exception_2 {
  public static void main(String[] args) {
    int[] arr = new int[3];
    try {
      arr[0] = 1;
      arr[1] = 2;
      arr[2] = 3;
      arr[3] = 4;
    } catch (Exception e) {
      System.out.println(e.getMessage());
    }

    System.out.println(Arrays.toString(arr));
  }
}
