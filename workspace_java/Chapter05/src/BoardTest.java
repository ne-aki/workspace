public class BoardTest {
  public static void main(String[] args) {
    //게시글을 5개 생성하고
    Board b1 = new Board(1,"게시글1","김자바",5);
    Board b2 = new Board(1,"게시글2","Kim Java",0);
    Board b3 = new Board(1,"게시글3","金自波",1);
    Board b4 = new Board(1,"게시글4","キム・ジャヴァ",10);
    Board b5 = new Board(1,"게시글5","김자바",7);
    //생성한 5개의 게시글을 배열에 저장!

    Board[] boards = new Board[5];
    boards[0] = b1;
    boards[1] = b2;
    boards[2] = b3;
    boards[3] = b4;
    boards[4] = b5;

    //1. 배열에 저장된 모든 게시글의 글번호, 제목, 작성자, 조회수를
    //    for문으로 출력
    for (int i = 0; i < boards.length; i++) {
      boards[i].display();
      System.out.println();
    }
    System.out.println();
    //2. 배열에 저장된 게시글 중 작성자가 '김자바'인 게시글의 모든 정보를
    //    for-each문으로 출력
    for (Board e : boards) {
      if (e.getWriter().equals("김자바")) {
        e.display();
      }
    }
    System.out.println();
    //3. 배열에 저장된 게시를 중 조회수가 2이상인 게시글의 제목만 출력(for)
    for (int i = 0; i < boards.length; i++) {
      if (boards[i].getReadCnt() >= 2) {
        System.out.println(boards[i].getTitle());
      }
    }
    System.out.println();
    //4. 배열에 저장된 모든 게시글의 조회수 총합을 출력(for-each)
    int sum = 0;
    for (Board e : boards) {
      sum += e.getReadCnt();
    }
    System.out.println(sum);
    //5. 배열에 저장된 게시글 중 조회수가 홀수인 게시글의 개수 출력(for)
    int cnt = 0;
    for (int i = 0; i < boards.length; i++) {
      if (boards[i].getReadCnt() % 2 == 1) {
        cnt++;
      }
    }
    System.out.println(cnt);
  }
}
