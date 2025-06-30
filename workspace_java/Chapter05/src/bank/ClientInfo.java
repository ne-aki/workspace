package bank;

public class ClientInfo {
  private String name;
  private String residentRegNum;
  private String tel;
  AccountInfo account;

  public ClientInfo(String name, String residentRegNum, String tel, AccountInfo account) {
    this.name = name;
    this.residentRegNum = residentRegNum;
    this.tel = tel;
    this.account = account;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getResidentRegNum() {
    return residentRegNum;
  }

  public void setResidentRegNum(String residentRegNum) {
    this.residentRegNum = residentRegNum;
  }

  public String getTel() {
    return tel;
  }

  public void setTel(String tel) {
    this.tel = tel;
  }

  public AccountInfo getAccount() {
    return account;
  }

  public void setAccount(AccountInfo account) {
    this.account = account;
  }
}
