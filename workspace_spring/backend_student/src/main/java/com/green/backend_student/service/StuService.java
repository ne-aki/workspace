package com.green.backend_student.service;

import com.green.backend_student.dto.ClassDTO;
import com.green.backend_student.dto.StuDTO;
import com.green.backend_student.mapper.StuMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StuService {
  private StuMapper stuMapper;

  public StuService(StuMapper stuMapper) {
    this.stuMapper = stuMapper;
  }

  public List<ClassDTO> getClassName() {
    return stuMapper.getClassName();
  }

  public List<StuDTO> getStudentList(ClassDTO classDTO) {
    return stuMapper.getStudentList(classDTO);
  }

}
