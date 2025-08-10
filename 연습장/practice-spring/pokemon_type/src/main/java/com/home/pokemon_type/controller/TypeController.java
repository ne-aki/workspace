package com.home.pokemon_type.controller;

import com.home.pokemon_type.dto.TypeDTO;
import com.home.pokemon_type.service.TypeService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/pokemon-types")
public class TypeController {
  private TypeService typeService;
  public TypeController(TypeService typeService) {
    this.typeService = typeService;
  }

  @GetMapping("")
  public List<TypeDTO> getTypeList() {
    return typeService.getTypeList();
  }
}
