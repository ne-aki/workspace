package com.green.backend_student.mapper;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface StuMapper {
  String getClassName();
}
