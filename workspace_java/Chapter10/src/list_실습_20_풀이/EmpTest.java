package list_실습_20_풀이;

public class EmpTest {
  public static void main(String[] args) {
    EmpService empService = new EmpService();
    empService.login();
    empService.salInfo();
    empService.increaseSalary();
  }
}
