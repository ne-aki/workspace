package business;

public class BusinessManTest {
  public static void main(String[] args) {

    BusinessMan bs1 = new BusinessMan(1,"김철수","영업부");
    BusinessMan bs2 = new BusinessMan(2,"박영희","개발부");
    BusinessMan bs3 = new BusinessMan(3,"장원영","홍보부");
    BusinessMan bs4 = new BusinessMan(4,"크하하","개발부");
    BusinessMan bs5 = new BusinessMan(5,"이근형","개발부");

    BusinessMan[] businessMEN = new BusinessMan[5];

    businessMEN[0] = bs1;
    businessMEN[1] = bs2;
    businessMEN[2] = bs3;
    businessMEN[3] = bs4;
    businessMEN[4] = bs5;
    System.out.println("2번문제");
    for (int i = 0; i < businessMEN.length; i++) {
      if (businessMEN[i].getDepartment().equals("개발부")) {
        businessMEN[i].printBusinessMan();
      }
    }
    System.out.println("3번문제");
    for (BusinessMan e : businessMEN) {
      if (e.getEmployeeNum() >= 3) {
        System.out.println(e.getEmployeeName());
      }
    }
    System.out.println("4번문제");
    for (BusinessMan e : businessMEN) {
      if (e.getDepartment().equals("개발부") && e.getEmployeeNum() % 2 == 0) {
        e.printBusinessMan();
      }
    }
  }
}
