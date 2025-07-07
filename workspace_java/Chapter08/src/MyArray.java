public class MyArray implements ArrayUtil{
  @Override
  //매개변수로 전달되는 배열의 모든 요소의 합을 리턴
  public int getSumOfArray(int[] arr) {
    int sum = 0;
    for (int e : arr) {
      sum += e;
    }
    return sum;
  }

  //매개변수로 전달되는 두 배열의 모든 요소의 평균을 리턴
  @Override
  public double getAvgOfArray(int[] arr1, int[] arr2) {
    return (double) (getSumOfArray(arr1) + getSumOfArray(arr2)) / (arr1.length + arr2.length);
  }

  //매개변수로 전달되는 배열에서 짝수만을 요소로 갖는 배열을 리턴
  @Override
  public int[] getArrayOfEven(int[] arr) {
    int cnt = 0;
    for (int i = 0; i < arr.length; i++) {
      if (arr[i] % 2 == 0) {
        cnt++;
      }
    }

    int index = 0;
    int[] resultArr = new int[cnt];
    //resultArr에 매개변수로 전달될 배열의 요소 중 짝수만 저장한다.
    for (int i = 0; i < arr.length; i++) {
      if (arr[i] % 2 == 0) {
        resultArr[index] = arr[i];
        index++;
      }
    }
    return resultArr;
  }
}
