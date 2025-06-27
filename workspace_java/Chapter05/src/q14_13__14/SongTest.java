package q14_13__14;

public class SongTest {
  public static void main(String[] args) {
    Song s1 = new Song();
    String[] composers = {"뿌리빛나","ねあき","root__shine"};
    s1.setSongInfo("자작곡", "이근형", "ne_aki 1집", 2025, composers);
    s1.printSongInfo();
  }
}
