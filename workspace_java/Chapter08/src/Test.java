import java.lang.reflect.Array;
import java.util.Arrays;

public class Test {
  public static void main(String[] args) {
    MathUtil math = new MyMath();
    ArrayUtil array = new MyArray();
    boolean result1 = math.isEven(3,2,3);
    double result2 = math.getSumFromOne(10);
    double result3 = math.getCircleArea(3);
    System.out.println(result1);
    System.out.println(result2);
    System.out.println(result3);
    int[] arr = {1,2,3,5};
    int result4 = array.getSumOfArray(arr);
    System.out.println(result4);
    int[] arr1 = {1,3,5};
    int[] arr2 = {2,4,6};
    double result5 = array.getAvgOfArray(arr1,arr2);
    System.out.println(result5);
    int[] Arr3 = {1,2,3,4,5,6,7};
    int[] result7 = array.getArrayOfEven(Arr3);
    System.out.println(Arrays.toString(result7));



    //상수 - 변하지 않는 값
    final int NUM = 0;
  }
}
