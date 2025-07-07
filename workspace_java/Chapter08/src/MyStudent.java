public class MyStudent implements StudentUtil {
  Student student;

  public MyStudent() {
    new Student();
  }

  @Override
  public int getTotalScore(int totalScore) {
    totalScore = student.getKorScore() + student.getMathScore() + student.getEngScore();
    return totalScore;
  }

  @Override
  public int getHighScoreStudent(int highScoreStudent) {
    return 0;
  }

  @Override
  public String getGradeByStudentName(String[] gradeByStudentName) {
    return "";
  }
}
