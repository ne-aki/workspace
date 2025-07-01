package list_실습_20;

public class Emp {
  private int empNum;
  private String name;
  private String departmentName;
  private String tel;
  private int pay;

  public Emp(int empNum, String name, String departmentName, String tel, int pay) {
    this.empNum = empNum;
    this.name = name;
    this.departmentName = departmentName;
    this.tel = tel;
    this.pay = pay;
  }

  public int getEmpNum() {
    return empNum;
  }

  public void setEmpNum(int empNum) {
    this.empNum = empNum;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getDepartmentName() {
    return departmentName;
  }

  public void setDepartmentName(String departmentName) {
    this.departmentName = departmentName;
  }

  public String getTel() {
    return tel;
  }

  public void setTel(String tel) {
    this.tel = tel;
  }

  public int getPay() {
    return pay;
  }

  public void setPay(int pay) {
    this.pay = pay;
  }
}
