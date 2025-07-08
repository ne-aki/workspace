public class MyStudent implements StudentUtil {

  @Override
  public int getTotalScore(Student student) {
    int sum = student.getKorScore() + student.getEngScore() + student.getMathScore();
    return sum;
  }

  @Override
  public Student getHighScoreStudent(Student stu1, Student stu2) {
    int sum1 = getTotalScore(stu1);
    int sum2 = getTotalScore(stu2);
    return sum1 > sum2 ? stu1 : stu2;
  }

  @Override
  public String getGradeByStudentName(Student[] students, String name) {
    double avg = 0.0; //찾은 학생의 평균을 저장
    String grade = "학생 없음"; //학생의 등급을 저장할 변수
    for (Student student : students) {
      if (student.getName().equals(name)) {
        avg = getTotalScore(student) / 3.0;
        grade = getGradeByAvg(avg);
      }
    }

    return grade;
  }

  //평균으로 등급 결정 후 리턴
  public String getGradeByAvg(double avg) {
    String grade = "";
    if (avg >= 90) {
      grade = "A";
    } else if (avg >= 80) {
      grade = "B";
    } else if (avg >= 70) {
      grade = "C";
    } else {
      grade = "D";
    }
    return grade;
  }
}
