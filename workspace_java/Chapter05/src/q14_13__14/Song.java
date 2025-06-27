package q14_13__14;

import java.util.Arrays;

public class Song {
  String title;
  String artist;
  String album;
  int year;
  String[] composer = new String[3];

  //모든 필드를 변경하는 메소드
  public void setSongInfo(String newTitle, String newArtist, String newAlbum, int newYear, String[] newComposer) {
    title = newTitle;
    artist = newArtist;
    album = newAlbum;
    year = newYear;
    composer = newComposer;
  }

  //노래의 모든 정보를 출력하는 메소드
  public void printSongInfo() {
    System.out.println("제목 : " + title);
    System.out.println("가수 : " + artist);
    System.out.println("앨범 제목 : " + album);
    System.out.println("발표 연도 : " + year);
//    for (int i = 0; i < composer.length; i++) {
//      System.out.println("작곡가" + (i + 1) + " : " + composer[i]);
//    }
    System.out.println("작곡가 : " + Arrays.toString(composer));
  }
}
