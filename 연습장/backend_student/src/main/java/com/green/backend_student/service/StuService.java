package com.green.backend_student.service;

import com.green.backend_student.mapper.StuMapper;
import org.springframework.stereotype.Service;

@Service
public class StuService {
  private StuMapper stuMapper;

  public StuService(StuMapper stuMapper) {
    this.stuMapper = stuMapper;
  }

  public String getClassName() {
    return stuMapper.getClassName();
  }
}
