package list_실습_20;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class EmpService {
  Scanner sc = new Scanner(System.in);
  List<Emp> empList = new ArrayList<>();
  Emp emp1 = new Emp(1001,"홍길동","개발부","010-0000-1111",1000);
  Emp emp2 = new Emp(1002,"이길동","영업부","010-0000-0000",3000);
  Emp emp3 = new Emp(1003,"박길동","생산부","010-0101-1010",4000);
  Emp emp4 = new Emp(1004,"김길동","개발부","010-1111-0101",2000);
  Emp emp5 = new Emp(1005,"장길동","영업부","010-9876-1234",1000);
  Emp emp6 = new Emp(1006,"다나카 길동","영업부","010-2222-2222",3000);
  Emp emp7 = new Emp(1007,"최길동","개발부","010-1212-1212",3000);

  public EmpService(Scanner sc, List<Emp> empList) {

  }

  //로그인 메소드
  public void login() {
    System.out.print("사번 : ");
  }

  //키보드로 입력받은 부서명의 월급 정보를 출력하는 메소드
  //
  public void printSalaryInfo() {

  }


}
