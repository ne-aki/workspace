package list_실습_20_풀이;

import java.security.PublicKey;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class EmpService {
  private List<Emp> empList;
  private Scanner sc;

  public EmpService() {
    sc = new Scanner(System.in);
    empList = new ArrayList<>();

    empList.add(new Emp(1001,"김자바","개발부","010-1111-1111",5000));
    empList.add(new Emp(1002,"이자바","영업부","010-1111-2222",6000));
    empList.add(new Emp(1003,"홍자바","개발부","010-1111-3333",7000));
    empList.add(new Emp(1004,"박자바","영업부","010-1111-4444",8000));
    empList.add(new Emp(1005,"정자바","인사부","010-1111-5555",9000));
  }

  //로그인 메소드
  //break는 가장 가까운 반복문을 벗어남.
  //메소드의 return의 역할
  //1. 메소드의 결과 데이터를 반환(리턴)
  //2. 메소드 안의 리턴을 return; 이렇게 사용하면 메소드를 종료하라는 의미
  public void login() {
    while (true) {
      System.out.print("사번 : ");
      int emp = sc.nextInt();
      System.out.print("비밀번호(연락처의 마지막 4자리) : ");
      String pw = sc.next();

      for (int i = 0; i < empList.size(); i++) {
        if (empList.get(i).getEmpNo() == emp && empList.get(i).getTel().substring(9).equals(pw)) {
          System.out.println("로그인 하였습니다.");
          System.out.println("'" + empList.get(i).getName() + "'님 반갑습니다.");
          return;
        }
      }
      System.out.println("사번 혹은 비밀번호가 일치하지 않습니다.");
    }
  }

  //키보드로 입력받은 월급 정보 출력 메소드
  public void salInfo() {
    System.out.print("부서명 : ");
    String deptName = sc.next();
    int salarySum = 0;
    int cnt = 0;
    System.out.println("==" + deptName + " 월급 현황==");
    for (int i = 0; i < empList.size(); i++) {
      if (empList.get(i).getDept().equals(deptName)) {
        String name = empList.get(i).getName();
        int salary = empList.get(i).getSalary();
        System.out.println("이름 : " + name + ", 월급 : " + salary);
        salarySum += salary;
        cnt++;
      }
    }

    double avg = (double) salarySum / cnt;
    System.out.println(deptName + "의 월급 총액은 " + salarySum + "이며, 평균 급여는 " + avg + "입니다.");
  }

  //키보드로 입력받은 부서의 모든 사원 월급 인상 메소드
  public void increaseSalary() {
    System.out.print("부서명 : ");
    String deptName = sc.next();
    System.out.print("인상급여 : ");
    int increase = sc.nextInt();
    System.out.println("개발부 각 사원의 급여가 각각 " + increase + "원씩 인상됩니다.");
    System.out.println("==월급 인상 후 " + deptName + " 월급 현황==");
    for (Emp emp : empList) {
      if (emp.getDept().equals(deptName)) {
        int Salary = emp.getSalary();
        emp.setSalary(Salary + increase);
        System.out.println("이름 : " + emp.getName() + "  월급 : " + emp.getSalary());
      }
    }
  }
}
