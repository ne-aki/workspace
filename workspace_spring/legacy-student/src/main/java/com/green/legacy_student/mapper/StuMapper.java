package com.green.legacy_student.mapper;

import com.green.legacy_student.dto.ClassDTO;
import com.green.legacy_student.dto.StuDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface StuMapper {
  public List<ClassDTO> getClassList();
  public List<StuDTO> getStuList();
  public List<StuDTO> getStuListAgain(int classNum);
  public StuDTO getStuDetail(int stuNum);
}
