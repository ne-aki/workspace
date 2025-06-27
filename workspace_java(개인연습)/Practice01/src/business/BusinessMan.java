package business;

public class BusinessMan {
  private int employeeNum;
  private String employeeName;
  private String department;

  public BusinessMan(int employeeNum, String employeeName, String department) {
    this.employeeNum = employeeNum;
    this.employeeName = employeeName;
    this.department = department;
  }

  public void setEmployeeNum(int employeeNum) {
    this.employeeNum = employeeNum;
  }

  public void setEmployeeName(String employeeName) {
    this.employeeName = employeeName;
  }

  public void setDepartment(String department) {
    this.department = department;
  }

  public int getEmployeeNum() {
    return employeeNum;
  }

  public String getEmployeeName() {
    return employeeName;
  }

  public String getDepartment() {
    return department;
  }

  public void printBusinessMan() {
    System.out.println("사번 : " + employeeNum);
    System.out.println("사원명 : " + employeeName);
    System.out.println("부서명 : " + department);
  }
}
