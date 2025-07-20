package com.ne_aki.practice.controller;

import com.ne_aki.practice.dto.GeunHyeongDTO;
import org.springframework.web.bind.annotation.*;

@RestController
public class GeunHyeongController {
  @GetMapping("/ghs")
  public GeunHyeongDTO geunHyeong() {
    return geunHyeong();
  }
}
