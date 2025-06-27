import javax.swing.*;
import java.util.Scanner;

public class 문제10 {
  public static void main(String[] args) {
    Scanner sc=new Scanner(System.in);

    System.out.print("국어점수 : ");
    int korScore= sc.nextInt();
    System.out.print("수학점수 : ");
    int mathScore= sc.nextInt();
    System.out.print("영어점수 : ");
    int engScore= sc.nextInt();
    int total=korScore+mathScore+engScore;
    System.out.println("총점 : "+total);
    double average=(double)total/3;
    System.out.println("평균 : "+average);
  }
}
