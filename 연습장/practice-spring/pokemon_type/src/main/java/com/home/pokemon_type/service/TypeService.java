package com.home.pokemon_type.service;

import com.home.pokemon_type.dto.TypeDTO;
import com.home.pokemon_type.mapper.TypeMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TypeService {
  private TypeMapper typeMapper;
  public TypeService(TypeMapper typeMapper) {
    this.typeMapper = typeMapper;
  }

  public List<TypeDTO> getTypeList() {
    return typeMapper.getTypeList();
  }
}
