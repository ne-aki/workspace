package com.green.first;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class StuService {

  //생성자 의존성 주입
  @Autowired //자동으로 객체를 연결하겠습니다.
  public StuService(Member m) {
    this.member = m;
  }
  private Member member;
}
