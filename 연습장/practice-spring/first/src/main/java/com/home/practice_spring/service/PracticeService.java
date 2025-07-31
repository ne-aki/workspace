package com.home.practice_spring.service;

import com.home.practice_spring.mapper.PracticeMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PracticeService {
  private PracticeMapper practiceMapper;
  @Autowired
  public PracticeService(PracticeMapper practiceMapper) {
    this.practiceMapper = practiceMapper;
  }

  public void regMember() {
    practiceMapper.regMember();
  }

  public void changeMember() {
    practiceMapper.changeMember();
  }

  public void deleteMember() {
    practiceMapper.deleteMember();
  }
}
