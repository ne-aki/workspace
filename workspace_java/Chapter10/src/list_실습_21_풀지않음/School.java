package list_실습_21_풀지않음;

import java.util.ArrayList;
import java.util.List;

public class School {
  List<StudyClass> classes;

  public School() {
    classes = new ArrayList<>();
    classes.add(new StudyClass("1반","김"));
    classes.add(new StudyClass("2반","최"));
    classes.add(new StudyClass("3반","정"));
  }


}
