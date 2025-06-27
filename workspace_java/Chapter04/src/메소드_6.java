import javax.imageio.plugins.tiff.GeoTIFFTagSet;

public class 메소드_6 {
  public static void main(String[] args) {
    int sum = getSum(10,20);
    System.out.println(sum);
    System.out.println(getAvg(30,50));
  }

  //매개변수로 전달받은 두 정수의 합을 리턴
  public static int getSum(int a, int b) {
    int sum = a + b;
    return sum;
  }

  //매개변수로 전달받은 두 정수의 평균을 리턴
  public static double getAvg(int a, int b) {
//    double avg = (a + b) / 2.0;
    double avg = getSum(a,b) / 2.0;
    return avg;
  }

}
