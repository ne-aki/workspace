package list.문제9;

public class Student {
  private String name;
  private int korScore;
  private int engScore;
  private int totalScore;

  public Student(String name, int korScore, int engScore) {
    this.name = name;
    this.korScore = korScore;
    this.engScore = engScore;
    totalScore = korScore + engScore;
  }
}
