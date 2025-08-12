package com.green.backend_student.mapper;

import com.green.backend_student.dto.ClassDTO;
import com.green.backend_student.dto.StuDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface StuMapper {
  List<ClassDTO> getClassName();
  List<StuDTO> getStudentList();
  List<StuDTO> selectedStudents(int classNum);
}
