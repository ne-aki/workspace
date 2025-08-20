package com.green.backend_shop.book_category.dto;

import lombok.Data;

//Getter, Setter, ToString이 다 들어있지만, 다른 것들도 만들어지기 때문에 조심해서 쓰는게 좋음

@Data
public class BookCategoryDTO {
  private int cateNum;
  private String cateName;
}
