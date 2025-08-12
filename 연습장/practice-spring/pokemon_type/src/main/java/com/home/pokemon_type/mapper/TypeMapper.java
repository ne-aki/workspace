package com.home.pokemon_type.mapper;

import com.home.pokemon_type.dto.TypeDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface TypeMapper {
  List<TypeDTO> getTypeList();
}
